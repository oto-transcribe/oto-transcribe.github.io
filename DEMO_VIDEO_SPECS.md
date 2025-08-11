# Demo Video Specifications for Apple Editorial

## Technical Requirements

### Video Specifications
- **Duration:** 15-30 seconds maximum
- **Resolution:** 1920x1080 (Full HD) minimum
- **Frame Rate:** 30fps (consistent with Apple's editorial standards)
- **Codec:** H.264 or H.265 (HEVC) for maximum compatibility
- **Bitrate:** 2000kbps for optimal quality/size balance
- **File Size Target:** <10MB for web performance

### Content Sequence (Recommended 20-second flow)

1. **Seconds 0-3:** Global hotkey press → OTO interface appears
   - Show actual hotkey press (⌃Space or custom)
   - Smooth interface animation with Neural Engine badge
   - CVDisplayLink waveform animation starts immediately

2. **Seconds 4-8:** Live transcription demonstration
   - Clear speech: "Let's transcribe at the speed of thought"
   - Real-time text appearance with 30ms precision
   - Waveform bars responding to voice with 60fps animation
   - Show language detection indicator (if multilingual)

3. **Seconds 9-14:** Apple Intelligence showcase
   - WhisperKit model indicator briefly visible
   - Neural Engine processing badge animation
   - Multiple language phrases for global appeal
   - Show accuracy confidence scoring

4. **Seconds 15-20:** Completion and integration
   - Release hotkey → Clean formatted transcript
   - Copy action animation
   - Paste into native macOS app (TextEdit/Messages)
   - Interface disappears smoothly

### Apple Editorial Optimization

#### Visual Elements to Highlight
- **Neural Engine Badge:** Visible during processing
- **Metal Performance Shaders:** Subtle animation indicators
- **CVDisplayLink 60fps:** Smooth waveform without stuttering
- **WhisperKit Integration:** Brief model name display
- **Apple Silicon Optimization:** Loading speed demonstration

#### Recommended Dialogue
```
Speaker: "Transform ideas into text instantly"
[Show English transcription]

Speaker (Spanish): "Habla en cualquier idioma" 
[Show Spanish transcription with auto-detection]

Speaker: "Professional transcription, completely private"
[Show completion and copy action]
```

### Technical Capture Settings

#### Screen Recording Setup
- **Resolution:** Native Retina (2560x1600 → downscale to 1920x1080)
- **Quality:** Lossless during capture
- **Frame Rate:** 60fps capture → 30fps export
- **Color Space:** sRGB for web consistency

#### Post-Production
```bash
# Recommended FFmpeg compression
ffmpeg -i demo_raw.mov \
  -vcodec libx264 \
  -pix_fmt yuv420p \
  -preset slow \
  -crf 23 \
  -b:v 2M \
  -maxrate 2.5M \
  -bufsize 5M \
  -vf "scale=1920:1080:flags=lanczos" \
  -movflags +faststart \
  -an \
  demo.mp4
```

### Apple Intelligence Storytelling

#### Key Messages to Convey Visually
1. **Speed:** Instant activation, real-time processing
2. **Privacy:** On-device processing indicators
3. **Intelligence:** Automatic language detection
4. **Integration:** Native macOS experience
5. **Performance:** Smooth 60fps animations

#### Technical Credibility Signals
- Genuine macOS interface (no mockups)
- Actual processing speeds (no time-lapse)
- Real Apple Silicon performance indicators
- Authentic system integration

### Performance Metrics to Demonstrate
- **Activation Time:** <200ms from hotkey to interface
- **Transcription Lag:** <30ms voice to text delay
- **Processing Speed:** 10x faster than real-time indication
- **Frame Rate:** Consistent 60fps waveform animation
- **Model Loading:** Sub-second WhisperKit model switching

This specification ensures the demo video will resonate with Apple's editorial team by showcasing genuine Apple Silicon optimizations and native macOS integration.