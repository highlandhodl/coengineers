# Research: Course Restructure - External API Integration

**Created**: 2025-12-10
**Status**: Complete

## Overview

This document captures research findings for the three external APIs used in Theme 4 labs. These APIs enable learners to extend their Obsidian productivity workflows beyond local document creation into external services for presentations, images, and audio.

**Key Principle**: The course provides *guidance* for API integration—learners configure their own API keys. No API credentials are stored or managed by CoEngineers.

---

## 1. Gamma API (Presentations)

### Decision
Use Gamma API v1.0 for generating presentations from Obsidian notes content.

### Rationale
- Generally Available (GA) since November 2025
- Clean REST API with comprehensive options
- Supports text-to-presentation workflow matching course use case
- Pro account required (accessible to target audience)
- Good documentation with clear request/response patterns

### Alternatives Considered
| Alternative | Rejected Because |
|-------------|------------------|
| Google Slides API | Requires complex OAuth flow, more developer-focused |
| PowerPoint REST API | Microsoft 365 dependency, enterprise-oriented |
| Presenton (open-source) | Self-hosted requirement adds complexity |

### API Reference

**Endpoint**: `https://public-api.gamma.app/v1.0/generations`
**Method**: POST
**Authentication**: `X-API-KEY: sk-gamma-xxxxxxxx` header

**Request Structure**:
```json
{
  "inputText": "Content from Obsidian notes",
  "textMode": "preserve",
  "format": "presentation",
  "themeId": "Oasis",
  "numCards": 10,
  "cardSplit": "auto",
  "additionalInstructions": "Style guidance",
  "textOptions": {
    "amount": "detailed",
    "tone": "professional",
    "audience": "business professionals",
    "language": "en"
  },
  "imageOptions": {
    "source": "aiGenerated",
    "model": "imagen-4-pro",
    "style": "photorealistic"
  }
}
```

**Key Parameters**:
- `inputText`: Up to 100,000 tokens (~400,000 characters)
- `textMode`: "preserve" (keep exact text) or "generate" (AI-enhanced)
- `format`: "presentation", "document", "social", "webpage"
- `numCards`: 1-60 (Pro), 1-75 (Ultra)
- `cardSplit`: Use `\n---\n` in inputText to control slide breaks

**Response**: Returns generation ID for async retrieval of presentation URL

**Rate Limits**: Per Gamma Pro/Ultra account limits (generous for course use)

**Pricing**: Included with Gamma Pro subscription ($10/month or similar)

### Lab Implementation Notes (T4.L1)
- Learners will need their own Gamma Pro account
- Lab teaches: extracting content from Obsidian → formatting inputText → API call → retrieving presentation
- Recommend using `textMode: "preserve"` for predictable output
- Use card splitting (`---`) to give learners control over slide boundaries

---

## 2. Gemini API (Image Generation)

### Decision
Use Gemini 2.5 Flash Image model for generating images from Obsidian note prompts.

### Rationale
- Free tier available (generous for learning)
- Well-documented REST API with clear examples
- Fast generation (optimised for low latency)
- Google AI Studio provides easy API key generation
- Python and JavaScript SDKs available

### Alternatives Considered
| Alternative | Rejected Because |
|-------------|------------------|
| DALL-E 3 | Higher cost, no free tier |
| Midjourney | No direct API (Discord bot only) |
| Stable Diffusion | Self-hosted complexity |
| Gemini 3 Pro | Higher cost, unnecessary for course purposes |

### API Reference

**Endpoint**: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent`
**Method**: POST
**Authentication**: `x-goog-api-key: {API_KEY}` header

**Request Structure**:
```json
{
  "contents": [{
    "parts": [{"text": "A professional photograph of a modern office workspace with plants and natural lighting"}]
  }],
  "generationConfig": {
    "responseModalities": ["TEXT", "IMAGE"],
    "imageConfig": {
      "aspectRatio": "16:9"
    }
  }
}
```

**Supported Aspect Ratios**:
- "1:1", "2:3", "3:2", "3:4", "4:3", "4:5", "5:4", "9:16", "16:9", "21:9"

**Response Structure**:
```json
{
  "candidates": [{
    "content": {
      "parts": [
        {"text": "Description of generated image"},
        {"inlineData": {"mimeType": "image/png", "data": "base64_encoded_image"}}
      ]
    }
  }]
}
```

**Pricing**:
- Free tier: Limited generations per day
- Pay-as-you-go: $30 per million output tokens (1,290 tokens per 1024×1024 image ≈ $0.04/image)

**Rate Limits**: Subject to Google AI Studio quotas (sufficient for course)

### Lab Implementation Notes (T4.L2)
- Learners will get API key from Google AI Studio (free account)
- Lab teaches: crafting prompts from Obsidian notes → API call → saving images locally
- Focus on prompt engineering best practices ("describe the scene, don't just list keywords")
- Use 16:9 for presentation-ready images, 1:1 for social media
- Output is base64-encoded PNG requiring decode step

---

## 3. ElevenLabs API (Text-to-Speech)

### Decision
Use ElevenLabs Text-to-Speech API for converting Obsidian note content to audio.

### Rationale
- Industry-leading voice quality
- Simple REST API with voice_id path parameter
- Multiple output formats (MP3, PCM, Opus)
- Free tier available (10,000 characters/month)
- SDKs available for multiple languages

### Alternatives Considered
| Alternative | Rejected Because |
|-------------|------------------|
| Google Cloud TTS | Complex GCP setup, OAuth required |
| Amazon Polly | AWS account complexity |
| OpenAI TTS | More limited voice options |
| Azure Cognitive Services | Enterprise-focused setup |

### API Reference

**Endpoint**: `https://api.elevenlabs.io/v1/text-to-speech/{voice_id}`
**Method**: POST
**Authentication**: `xi-api-key: {API_KEY}` header

**Request Structure**:
```json
{
  "text": "Content from Obsidian notes to convert to speech",
  "model_id": "eleven_multilingual_v2",
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.8,
    "style": 0.0,
    "use_speaker_boost": true
  }
}
```

**Key Parameters**:
- `voice_id` (path): Voice identifier (get from `/v1/voices` endpoint)
- `model_id`: "eleven_multilingual_v2" (default), "eleven_turbo_v2.5" (faster)
- `output_format` (query): "mp3_22050_32", "mp3_44100_128", "pcm_16000", etc.

**Response**: Binary audio file (application/octet-stream)

**Popular Voice IDs** (for course reference):
- Rachel (warm female): `21m00Tcm4TlvDq8ikWAM`
- Adam (professional male): `pNInz6obpgDQGcFmaJgB`
- Get full list via `/v1/voices` endpoint

**Pricing**:
- Free tier: 10,000 characters/month
- Creator: $5/month for 30,000 characters
- Pay-as-you-go available

**Rate Limits**: Based on subscription tier

### Lab Implementation Notes (T4.L3)
- Learners will create free ElevenLabs account
- Lab teaches: extracting text from Obsidian notes → selecting voice → API call → saving audio file
- Recommend using MP3 format for compatibility
- Show how to list available voices before generation
- Consider chunking long texts to avoid timeout issues

---

## Research Questions Resolved

| Question | Resolution |
|----------|------------|
| Which presentation API is best suited? | Gamma v1.0 - best documentation, direct text-to-presentation |
| Which image generation API is most accessible? | Gemini 2.5 Flash - free tier, simple setup |
| Which TTS API balances quality and accessibility? | ElevenLabs - industry-leading quality, free tier |
| Do learners need to embed API keys in site? | No - guidance-only, learners use their own keys |
| What's the minimum account requirement? | Free tiers available for all three services |

---

## Sources

### Gamma API
- [Gamma Developer Documentation](https://developers.gamma.app/docs/getting-started)
- [Generate API Parameters Explained](https://developers.gamma.app/docs/generate-api-parameters-explained)
- [Understand the API Options](https://developers.gamma.app/docs/understand-the-api-options)

### Gemini API
- [Gemini API Image Generation](https://ai.google.dev/gemini-api/docs/image-generation)
- [Google AI Studio](https://aistudio.google.com/apikey)

### ElevenLabs API
- [ElevenLabs Text-to-Speech API](https://elevenlabs.io/docs/api-reference/text-to-speech/convert)
- [ElevenLabs Getting Started](https://elevenlabs-sdk.mintlify.app/api-reference/getting-started)
- [How to Use ElevenLabs API (2025)](https://precallai.com/elevenlabs-api-for-developers)
