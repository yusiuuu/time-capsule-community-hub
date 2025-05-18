# time-capsule-community-hub
AI-driven web app for community waste exchange with upcycling and need prediction
## Notes
- Webpack Dev Server deprecation warnings (`onAfterSetupMiddleware`, `onBeforeSetupMiddleware`) appear due to `react-scripts` v5.0.1. These are harmless for development and will be addressed in production builds.
## Known Issues…
- Some dev dependencies (e.g., react-scripts) have high vulnerabilities. These are inherited from Create React App and do not impact production builds.

# Time Capsule: Waste-to-Resource Community Hub

An AI-driven web app for community waste exchange with upcycling suggestions and need prediction.

## Setup of the project

### Frontend (React)
1. `cd client`
2. `npm install`
3. `npm start`

### Backend (Express)
1. `cd server`
2. `npm install`
3. Create `.env` with `PORT=5000`
4. `npm run dev`

### ML Service (FastAPI)
1. `cd ml`
2. `python -m venv venv`
3. `.\venv\Scripts\activate` (Windows)
4. `pip install -r requirements.txt`
5. `uvicorn main:app --reload`

## Tech Stack
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express
- ML: FastAPI, PyTorch
- Database: MongoDB, Redis
- APIs: Google Maps, Cloudinary, Twilio

## Known Issues
- Some dev dependencies (e.g., react-scripts) may have high vulnerabilities. These are inherited from Create React App and do not impact production builds.
- Webpack Dev Server deprecation warnings appear due to `react-scripts` v5.0.1. These are harmless for development.
