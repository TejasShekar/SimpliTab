import { useState, useEffect } from "react";

export const MainFocus = () => {
  const [focus, setFocus] = useState(null);
  const [isChecked, setChecked] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const handleFocusInput = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setFocus(e.target.value);
      localStorage.setItem("p8focus", e.target.value);
      setEditMode(false);
    }
  };

  const editFocus = () => {
    localStorage.removeItem("p8focus");
    setEditMode(true);
  };

  const deleteFocus = () => {
    localStorage.removeItem("p8focus");
    localStorage.removeItem("isChecked");
    setEditMode(true);
    setFocus(null);
    setChecked(false);
  };

  useEffect(() => {
    setChecked(JSON.parse(localStorage.getItem("isChecked")) || isChecked);
    if (localStorage.getItem("p8focus") !== null) {
      setFocus(localStorage.getItem("p8focus"));
      setEditMode(false);
    }
  }, [isChecked]);

  return (
    <>
      {editMode ? (
        <>
          <p className="focus-text pt-2 text-center">
            What is your main focus today?
          </p>
          <input
            defaultValue={focus}
            type="text"
            className="userInput text-center"
            onKeyDown={handleFocusInput}
          />
        </>
      ) : (
        <>
          <div className="flex-center focus mx-2">
            <input
              type="checkbox"
              id="main-focus"
              onChange={() => {
                setChecked((prev) => !prev);
                localStorage.setItem("isChecked", !isChecked);
              }}
              checked={Boolean(isChecked)}
            />
            <label htmlFor="main-focus">
              <p
                className="focus-text pl-1 text-center"
                style={
                  isChecked
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                My main focus is to {focus}
              </p>
            </label>
            {!isChecked && (
              <button className="focus-edit" onClick={editFocus}>
                <i className="fas fa-pen"></i>
              </button>
            )}
            <button className="focus-delete" onClick={deleteFocus}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
          {isChecked ? (
            <p className="pt-2">Great Job !</p>
          ) : (
            <p className="pt-2">You can do this</p>
          )}
        </>
      )}
    </>
  );
};
