# ⚡ Subathon Timer Widget - Complete Setup Guide

## 🚀 Quick Start (5 Minutes)

### Step 1: Download & Extract
1. Download the widget package
2. Extract all files to your computer
3. Keep the folder structure intact

### Step 2: Test the Widget
1. Open `test_widget.html` in your browser
2. Or open `widget/demo.html` for interactive testing
3. Verify everything loads correctly

### Step 3: Add to OBS Studio
1. Open OBS Studio
2. Click **+** in Sources panel
3. Select **Browser Source**
4. Create new source: "Subathon Timer"
5. Set these settings:
   - **URL**: Full path to `widget/index.html`
   - **Width**: 480
   - **Height**: 600
   - **FPS**: 30
   - ✅ Check "Local File"
6. Click **OK**

### Step 4: Configure StreamElements (Optional)
1. Go to [StreamElements.com](https://streamelements.com)
2. Login with your Twitch/YouTube account
3. Navigate to **Account Settings** → **Show Secrets**
4. Copy your **JWT Token**
5. Open `config.json` in a text editor
6. Replace `YOUR_STREAMELEMENTS_TOKEN_HERE` with your token
7. Save the file

---

## 🎨 Customization Guide

### Colors & Theme
Edit `config.json` to change colors:
```json
"theme": {
  "primaryColor": "#ff6b6b",
  "secondaryColor": "#4ecdc4", 
  "accentColor": "#f9ca24"
}
```

### Milestones
Add/edit milestones in `config.json`:
```json
"milestones": [
  {
    "id": 1,
    "goal": 50,
    "type": "subs",
    "title": "50 Subs Milestone!",
    "reward": "New game reveal!",
    "color": "#ff6b6b"
  }
]
```

### Timer Settings
```json
"initialTime": 3600,     // Starting time (seconds)
"timePerSub": 300,       // Time added per sub (5 min)
"timePerBit": 1,         // Time per bit (1 second)
"timePerTip": 60         // Time per dollar tip (1 min)
```

---

## 🔧 Advanced Setup

### Using a Local Web Server
For better performance, serve files via HTTP:

**Option 1: Python**
```bash
cd widget/
python -m http.server 8000
# Then use: http://localhost:8000/index.html
```

**Option 2: Node.js**
```bash
npx serve widget/
# Use the provided URL
```

**Option 3: Live Server (VS Code)**
1. Install "Live Server" extension
2. Right-click `widget/index.html`
3. Select "Open with Live Server"

### Multiple Scenes
Create different versions for different scenes:
1. Duplicate the `widget` folder
2. Rename to `widget-starting-soon`, `widget-intermission`, etc.
3. Customize each version's `config.json`
4. Add each as separate Browser Sources in OBS

---

## 📱 Platform-Specific Setup

### Twitch
1. Connect StreamElements to Twitch
2. Enable alerts in StreamElements dashboard
3. Test with channel point redeems

### YouTube
1. Connect StreamElements to YouTube
2. Enable Super Chat/Super Thanks alerts
3. Configure membership alerts

### Kick/Other Platforms
Currently optimized for Twitch/YouTube. For other platforms:
1. Use demo mode (no StreamElements token)
2. Manually trigger events via demo controls
3. Or integrate with platform-specific APIs

---

## 🎯 OBS Scene Setup Tips

### Positioning
- **Full Overlay**: 1920x1080, position at 0,0
- **Corner Widget**: 480x600, position at corner
- **Bottom Bar**: Resize to 1920x200, position at bottom

### Layering
1. Game Capture (bottom)
2. Webcam
3. Subathon Timer (top)
4. Alerts above timer

### Filters
Add these filters to the Browser Source:
- **Color Correction**: Adjust opacity if needed
- **Chroma Key**: If using green screen effects

---

## 🐛 Troubleshooting

### Widget Not Showing
- ✅ Check file path is correct
- ✅ Ensure "Local File" is checked in OBS
- ✅ Try refreshing the browser source
- ✅ Check browser console (F12) for errors

### No StreamElements Events
- ✅ Verify JWT token is correct
- ✅ Check StreamElements connection status
- ✅ Ensure alerts are enabled in StreamElements
- ✅ Test with demo mode first

### Performance Issues
- ✅ Reduce particle count in CSS
- ✅ Disable animations in `config.json`
- ✅ Use local web server instead of file://
- ✅ Close unnecessary browser tabs

### Mobile/Responsive Issues
- ✅ Widget auto-adapts to container size
- ✅ Test different OBS source dimensions
- ✅ Check CSS media queries are working

---

## 🎨 CSS Customization

### Changing Fonts
Replace in `widget/style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

### Custom Animations
Add to `widget/style.css`:
```css
.custom-animation {
  animation: myAnimation 2s infinite;
}

@keyframes myAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

### Layout Changes
Modify the grid in `widget/style.css`:
```css
.stats-container {
  grid-template-columns: repeat(2, 1fr); /* 2 columns instead of 3 */
}
```

---

## 🔒 Security & Privacy

### StreamElements Token
- ✅ Token is used client-side only
- ✅ No server storage or transmission
- ✅ Revoke token anytime in StreamElements
- ✅ Token only accesses public stream data

### Local Files
- ✅ All files run locally on your computer
- ✅ No external dependencies except fonts
- ✅ No data collection or tracking

---

## 📞 Support & Updates

### Getting Help
1. Check this guide first
2. Test with demo mode
3. Check browser console for errors
4. Contact: sh20raj@gmail.com

### Updates
- Download new versions from original source
- Backup your `config.json` before updating
- Copy your settings to new version

### Custom Development
Need custom features? We offer:
- ✨ Custom animations and effects
- 🎨 Unique themes and layouts  
- 🔧 Platform-specific integrations
- 📱 Mobile/tablet versions

---

## 🎉 Pro Tips

### Engagement Boost
- Set exciting milestone rewards
- Use sound alerts with OBS
- Announce milestones in chat
- Create urgency with timer

### Visual Appeal
- Match colors to your brand
- Use consistent fonts across overlays
- Position for optimal visibility
- Test on different backgrounds

### Performance
- Monitor CPU usage in OBS
- Disable effects if needed
- Use hardware acceleration
- Keep OBS updated

---

**🚀 Ready to level up your streams? Your community will love this professional timer!**