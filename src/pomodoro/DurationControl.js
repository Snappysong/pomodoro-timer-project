import React from "react";
import {secondsToDuration} from "../utils/duration";

const DurationControl = ( { session, focusDuration, breakDuration, setBreakDuration, setFocusDuration }) => {

    const handleFocusIncrease = (click) => {
        const newFocusDuration = focusDuration + 300;
        if (newFocusDuration >= 3600){
          setFocusDuration(3600);
        } else {
          setFocusDuration(newFocusDuration);
        }
      }
      const handleFocusDecrease = (click) => {
        const newFocusDuration = focusDuration - 300;
        if (newFocusDuration < 300){
          setFocusDuration(300);
        } else {
          setFocusDuration(newFocusDuration);
        }
      }
      const handleBreakIncrease = (click) => {
        const newBreakDuration = breakDuration + 60;
        if (newBreakDuration > 900){
          setBreakDuration(900);
        } else {
          setBreakDuration(newBreakDuration);
        }
      }
      const handleBreakDecrease = (click) => {
        const newBreakDuration = breakDuration - 60;
        if (newBreakDuration < 60){
          setBreakDuration(60);
        } else {
          setBreakDuration(newBreakDuration);
        }
      }


      return (
          <>
          <div className="row">
            <div className="col">
                <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-focus">
                Focus Duration: {secondsToDuration(focusDuration)}
                </span>
                <div className="input-group-append">
                <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                onClick={handleFocusDecrease}
                disabled={session}
                >
                <span className="oi oi-minus" />
                </button>
                <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={handleFocusIncrease}
                disabled={session}
                >
                <span className="oi oi-plus" />
                </button>
                </div>
            </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
                <span className="input-group-text" data-testid="duration-break">
                Break Duration: {secondsToDuration(breakDuration)}
                </span>
                <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={handleBreakDecrease}
                  disabled={session}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={handleBreakIncrease}
                  disabled={session}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
}


export default DurationControl;