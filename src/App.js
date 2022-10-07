import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';

function App() {
  const [info, setInfo] = useState(['jacoj59237@ishyp.com', 'sumeetishwar1610@gmail.com', 'mywozu@cyclelove.cc', 'wlxpahs874@tmail6.com', 'rutrucudru@vusra.com', 'icnruzfikvh@spacehotline.com']);
  const [sendingState, setsendingState] = useState(false);
  const [Error, setError] = useState(false);
  const [templateInput, settemplateInput] = useState("");

  const formHandler = async (email) => {
    setsendingState(true)
    const res = await fetch("https://email-sender-client.herokuapp.com/sendit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        info, templateInput
      })
    });

    const data = await res.json();

    if (data.json == 200) {
      setsendingState(false)
      settemplateInput("")
    } else {
      setError(true)
      setsendingState(false)
    }

  }

  // const Fetchdata = () => {
  //   db.collection("users").get().then((querySnapshot) => {

  //     querySnapshot.forEach(element => {
  //       var data = element.data();
  //       setInfo(arr => [...arr, data.email]);
  //     });
  //   })
  // }

  // useEffect(() => {
  //   Fetchdata()
  // }, []);

  const inputHandler = (e) => {
    settemplateInput(e.target.value) 
  }

  return (
    <div className="App">
      <header className="App-header">
        {Error ? <><p>Error occured while sending the email...</p></> :
          sendingState ? <><p>Please wait while we sending the mails...</p></> :
            info.length > 0 ?
              <>
                <p>Email Count: {info.length}</p>
                <div>
                  <label>Enter the message over here: </label>
                  <textarea name="template" id="template" cols="30" rows="1" onChange={inputHandler}></textarea><br />
                  <button onClick={() => { formHandler() }}>Send It ‍🚀</button>
                </div>
              </>
              : <><p>Loading...</p></>
        }
      </header>
    </div>
  );
}

export default App;
