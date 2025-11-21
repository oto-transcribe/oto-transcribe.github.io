/**
 * Module Loader System for OTO Transcribe Website
 * Loads HTML modules dynamically and assembles the page
 */

class ModuleLoader {
  constructor(config) {
    this.config = config;
    this.loadedModules = new Map();
    this.errors = [];
  }

  /**
   * Load a single module by name
   */
  async loadModule(moduleName) {
    try {
      const moduleConfig = this.config.modules.find(m => m.name === moduleName);
      if (!moduleConfig) {
        throw new Error(`Module "${moduleName}" not found in configuration`);
      }

      const response = await fetch(moduleConfig.path);
      if (!response.ok) {
        throw new Error(`Failed to load module "${moduleName}": ${response.status}`);
      }

      const html = await response.text();
      this.loadedModules.set(moduleName, {
        html,
        config: moduleConfig,
        loadedAt: Date.now()
      });

      return html;
    } catch (error) {
      this.errors.push({ module: moduleName, error: error.message });
      console.error(`Error loading module "${moduleName}":`, error);
      throw error;
    }
  }

  /**
   * Load modules in the specified order
   */
  async loadModulesInOrder(moduleNames) {
    const results = [];

    for (const moduleName of moduleNames) {
      try {
        const html = await this.loadModule(moduleName);
        results.push({ name: moduleName, success: true, html });
      } catch (error) {
        results.push({ name: moduleName, success: false, error: error.message });
      }
    }

    return results;
  }

  /**
   * Load all modules concurrently (for non-critical modules)
   */
  async loadModulesConcurrent(moduleNames) {
    const promises = moduleNames.map(name =>
      this.loadModule(name)
        .then(html => ({ name, success: true, html }))
        .catch(error => ({ name, success: false, error: error.message }))
    );

    return await Promise.all(promises);
  }

  /**
   * Mount a module to the DOM
   */
  mountModule(moduleName, targetSelector) {
    const moduleData = this.loadedModules.get(moduleName);
    if (!moduleData) {
      console.error(`Module "${moduleName}" not loaded`);
      return false;
    }

    const targetElement = document.querySelector(targetSelector);
    if (!targetElement) {
      console.error(`Target element "${targetSelector}" not found`);
      return false;
    }

    targetElement.innerHTML = moduleData.html;
    return true;
  }

  /**
   * Initialize and load all modules based on configuration
   */
  async initialize() {
    try {
      // Separate critical and lazy modules
      const criticalModules = this.config.modules
        .filter(m => m.priority === 'critical')
        .sort((a, b) => a.order - b.order)
        .map(m => m.name);

      const lazyModules = this.config.modules
        .filter(m => m.priority === 'lazy')
        .map(m => m.name);

      // Load critical modules in order
      console.log('Loading critical modules...');
      const criticalResults = await this.loadModulesInOrder(criticalModules);

      // Mount critical modules
      for (const result of criticalResults) {
        if (result.success) {
          const moduleConfig = this.config.modules.find(m => m.name === result.name);
          this.mountModule(result.name, moduleConfig.target);
        }
      }

      // Trigger content loaded event
      document.dispatchEvent(new CustomEvent('modulesLoaded', {
        detail: { phase: 'critical' }
      }));

      // Load lazy modules concurrently
      if (lazyModules.length > 0) {
        console.log('Loading lazy modules...');
        const lazyResults = await this.loadModulesConcurrent(lazyModules);

        // Mount lazy modules
        for (const result of lazyResults) {
          if (result.success) {
            const moduleConfig = this.config.modules.find(m => m.name === result.name);
            this.mountModule(result.name, moduleConfig.target);
          }
        }

        // Trigger all loaded event
        document.dispatchEvent(new CustomEvent('modulesLoaded', {
          detail: { phase: 'complete' }
        }));
      }

      return {
        success: true,
        criticalCount: criticalResults.filter(r => r.success).length,
        lazyCount: lazyResults.filter(r => r.success).length,
        errors: this.errors
      };
    } catch (error) {
      console.error('Failed to initialize modules:', error);
      return {
        success: false,
        error: error.message,
        errors: this.errors
      };
    }
  }

  /**
   * Get error report
   */
  getErrors() {
    return this.errors;
  }
}

// Export for use
if (typeof window !== 'undefined') {
  window.ModuleLoader = ModuleLoader;
}
