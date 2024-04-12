import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { registerUser } from "../api/user.api";

export function MultiChoiceDialog({ formData ,setMultiChoice}) {
  const [selectDialog, setSelectDialog] = useState("genres");
  const [selectGenres, setSelectGenres] = useState([]);

  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();

  function onSubmitDialog(languages) { 
    setLoading(true);
    const data = {
      name: formData.name,
      mobile_no: formData.phone,
      email: formData.email,
      password: formData.password,
      genres: selectGenres,
      languages: languages,
    };
    const resp = registerUser(data);
    resp
      .then(function (response) {
        setLoading(false);
        alert(response.message);
        navigator("/");
      })
      .catch(function (err) {
        setLoading(false);
        alert(err.response.data.detail);

      });
    console.log(resp);

    // navigator("/");
  }
  function onClose(params) {
    setMultiChoice(false)
  }
  return (
    <>
      {selectDialog === "genres" && (
        <MultiGenresChoice
          setSelectDialog={setSelectDialog}
          setSelectGenres={setSelectGenres}
          onClose={onClose}
        />
      )}
      {selectDialog === "language" && (
        <MultiLanguageChoice setSelectDialog={setSelectDialog} onSubmitDialog={onSubmitDialog} />
      )}
      {loading && <Loader />}
    </>
  );
}

export function MultiLanguageChoice({ onSubmitDialog,setSelectDialog }) {
  const dataLanguages = [
    "Hindi",
    "English",
    "Tamil",
    "Telugu",
    "Marathi",
    "Punjabi",
    "Gujarati",
    "Korean",
    "Japanese",
    "Spanish",
  ];

  const languageScriptMapping = {
    Hindi: "हिन्दी",
    Tamil: "தமிழ்",
    Telugu: "తెలుగు",
    Marathi: "मराठी",
    Punjabi: "ਪੰਜਾਬੀ",
    Gujarati: "ગુજરાતી",
    Korean: "한국어",
    Japanese: "日本語",
    Spanish: "Español",
    English: "English",
  };

  const [selectedItems, setSelectedItems] = useState([]);

  function addElements(item) {
    console.log(item);
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  return (
    <>
      <div class="dialog-overlay">
        <div class="dialog-container">
          <div class="d-body">
            <h2>Select your favorites Genres </h2>

            <div class="g-cards" style={{ maxWidth: "800px" }}>
              {dataLanguages.map((item, index) => (
                <div
                  key={item.id}
                  className={`g-card  ${selectedItems.includes(item) ? "selected-card" : ""
                    }`}
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/img/languages/${item}.jpg'), lightgray 50% / cover no-repeat`,
                    backgroundSize: "cover",
                  }}
                  onClick={() => addElements(item)}
                >
                  <h4>{languageScriptMapping[item]}</h4>
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:"5px"}}>
            <button
                class="l-btn"
                onClick={()=>{
                  setSelectDialog("genres")
                }}
              >
                Back
              </button>
              <button
                class="l-btn"
                onClick={(e) => {
                  if (selectedItems && selectedItems.length > 0) {
                    onSubmitDialog(selectedItems);
                  } else {
                    alert("Please select at least one language");
                  }
                }}
              >
                Submit
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MultiGenresChoice({ setSelectDialog, setSelectGenres,onClose }) {
  const dataItem = [
    { id: 1, title: "Action" },
    { id: 2, title: "Adventure" },
    { id: 3, title: "Animated" },
    { id: 4, title: "Biography" },
    { id: 5, title: "Comedy" },
    { id: 6, title: "Drama" },
    { id: 7, title: "Fantasy" },
    { id: 8, title: "Horror" },
    { id: 9, title: "Mystery" },
    { id: 10, title: "Romantic" },
    { id: 11, title: "Science Fiction" },
    { id: 12, title: "Thriller" },
  ];
  const [selectedItems, setSelectedItems] = useState([]);

  function addElements(item) {
    console.log(item);
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  }

  return (
    <>
      <div class="dialog-overlay">
        <div class="dialog-container">
          <div class="d-body">
            <h2>Select your favorites Genres </h2>

            <div class="g-cards">
              {dataItem.map((item, index) => (
                <div
                  key={item.id}
                  className={`g-card  ${selectedItems.includes(item.title) ? "selected-card" : ""
                    }`}
                  style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('/img/genres/${item.title}.jpg'), lightgray 50% / cover no-repeat`,
                    backgroundSize: "cover",
                  }}
                  onClick={() => addElements(item.title)}
                >
                  <h4>{item.title}</h4>
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:"5px"}}>
            <button
              class="l-btn"
              onClick={() => {
                onClose()
              }}
            >
              Close
            </button>
            <button
              class="l-btn"
              onClick={() => {
                if (selectedItems && selectedItems.length > 0) {
                  setSelectGenres(selectedItems);
                  setSelectDialog("language");
                } else {
                  alert("Please select at least one genre");
                }
              }}
            >
              Next
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
