import React from "react";
import {secondsToDuration} from "../utils/duration";

function ProgressView( {session, focusDuration, breakDuration, isTimerRunning } ) {

    const displayProperDuration = (session) => {
        if (session.label === "Focusing"){
            return secondsToDuration(focusDuration);
        } else {
            return secondsToDuration(breakDuration);
        }
    }

    const displayPaused = (isTimerRunning) => {
        if (!isTimerRunning){
            return 'PAUSED';
        }
    }

    const progress = (session) => {
        if (session.label === "Focusing"){
            return ((focusDuration - session.timeRemaining) / focusDuration) * 100
        }
        if (session.label === "On Break"){
            return ((breakDuration - session.timeRemaining) / breakDuration) * 100
        }
    }

    if (session === null) {
        return [];
    } else {
        return (
        <div>
            <div className="row mb-2">
            <div className="col">
                <h2 data-testid="session-title">
                {session?.label} for {displayProperDuration(session)} minutes
                </h2>
                <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session?.timeRemaining)} remaining
                </p>
            </div>
            </div>
            <h2>{displayPaused(isTimerRunning)}</h2>
            <div className="row mb-2">
            <div className="col">
                <div className="progress" style={{ height: "20px" }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={progress(session)} 
                    style={{ width: `${progress(session)}%` }}
                />
                </div>
            </div>
            </div>
        </div>
        );
    };
}

export default ProgressView;