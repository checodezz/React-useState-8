import { useState } from "react";
import "./App.css";

const Survey = () => {
  const [surveyText, setSurveyText] = useState("");

  const clickHandler = () => {
    alert("Survey response: " + surveyText);
  };
  return (
    <div>
      <label htmlFor="survey">Take the survey: </label>
      <textarea
        id="survey"
        rows={3}
        cols={35}
        onChange={(event) => setSurveyText(event.target.value)}
      />
      <button onClick={clickHandler}>Submit Survey</button>
    </div>
  );
};

const Recipe = () => {
  const [recipes, setRecipes] = useState("");
  const [displayRecipes, setDisplayRecipes] = useState("");

  // console.log(recipes.split('. '));

  const clickHandler = () => {
    setDisplayRecipes(recipes.split(". ").map((rec) => <li>{rec}</li>));
  };

  return (
    <div>
      <label htmlFor="recipeDetails">Enter your recipe: </label>
      <textarea
        id="recipeDetails"
        rows={3}
        cols={35}
        onChange={(event) => setRecipes(event.target.value)}
      />
      <button onClick={clickHandler}>Save Recipe</button>
      {displayRecipes && <ol>{displayRecipes}</ol>}
    </div>
  );
};

const Diary = () => {
  const [diaryEntry, setDiaryEntry] = useState("");
  const [displayDiaryEntry, setDisplayDiaryEntry] = useState("");
  const clickHandler = () => {
    setDisplayDiaryEntry(diaryEntry);
  };
  return (
    <div>
      <label htmlFor="entry">Write your dairy entry: </label>
      <textarea
        id="entry"
        rows={3}
        cols={35}
        onChange={(event) => setDiaryEntry(event.target.value)}
      />
      <button onClick={clickHandler}>Save Diary Entry</button>
      {displayDiaryEntry && (
        <p style={{ fontStyle: "italic" }}>
          Diary entry saved: {displayDiaryEntry}
        </p>
      )}
    </div>
  );
};

const Story = () => {
  const [story, setStory] = useState("");
  const [displayStory, setDisplayStory] = useState("");
  const clickHandler = () => {
    setDisplayStory(story);
  };
  return (
    <div>
      <label htmlFor="story">Share your story: </label>
      <textarea
        id="story"
        rows={3}
        cols={35}
        onChange={(event) => setStory(event.target.value)}
      />
      <button onClick={clickHandler}>Submit Story</button>
      {displayStory && <p>Your story: {displayStory}</p>}
    </div>
  );
};

const ItemList = () => {
  const [itemList, setItemList] = useState("");
  const [displayItemList, setDisplayItemList] = useState("");

  const clickHandler = () => {
    setDisplayItemList(itemList.split(", ").map((item) => <li>{item}</li>));
  };
  return (
    <div>
      <label>Enter the list of Items: </label>
      <textarea
        id="items"
        rows={3}
        cols={35}
        onChange={(event) => setItemList(event.target.value)}
      />
      <button onClick={clickHandler}>Display Items</button>
      {displayItemList.length > 1 && <ul>{displayItemList}</ul>}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <h1>Text Area Programs</h1>
      <Survey />
      <br />
      <Recipe />
      <br />
      <Diary />
      <br />
      <Story />
      <br />
      <ItemList />
    </main>
  );
}
