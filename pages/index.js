import Head from "next/head";
import Snackbar from "../components/Snackbar";
import { useRef } from "react";
import styles from "../styles/App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeShow } from "../features/show";
import { changeShowTwo } from "../features/showtwo";
import { changeShowThree } from "../features/showthree";

export default function Home() {
  const dispatch = useDispatch();
  const snackbarRef = useRef(null);
  const show = useSelector((state) => state.show.value);
  const showtwo = useSelector((state) => state.showtwo.value);
  const showthree = useSelector((state) => state.showthree.value);

  const clearall = () => {
    dispatch(changeShow(false));
    dispatch(changeShowTwo(false));
    dispatch(changeShowThree(false));
  };

  const one = () => {
    dispatch(changeShow(true));
    setTimeout(() => {
      dispatch(changeShow(false));
    }, 4000);
  };
  const two = () => {
    dispatch(changeShowTwo(true));
    setTimeout(() => {
      dispatch(changeShowTwo(false));
    }, 4000);
  };
  const three = () => {
    dispatch(changeShowThree(true));
    setTimeout(() => {
      dispatch(changeShowThree(false));
    }, 4000);
  };

  const button = [
    { key: 0, name: "Show Notification 1", click: one },
    { key: 1, name: "Show Notification 2", click: two },
    { key: 2, name: "Show Notification 3", click: three },
    { key: 3, name: "Clear All", click: clearall },
  ];

  return (
    <div>
      <Head>
        <title>Notifications</title>
      </Head>

      <div className={styles.App}>
        <div className={styles.buttonContainer}>
          {button.map((item) => (
            <button
              key={item.key}
              className={styles.showSnackbarBttn}
              onClick={() => {
                item.click();
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className={styles.notificationContainer}>
          {show ? (
            <Snackbar
              ref={snackbarRef}
              message="Task Completed Successfully!"
              color="#00F593"
              onClick={() => {
                dispatch(changeShow(false));
              }}
            />
          ) : null}
          {showtwo ? (
            <Snackbar
              ref={snackbarRef}
              message="Message Sent Successfully!"
              color="#fcba03"
              onClick={() => {
                dispatch(changeShowTwo(false));
              }}
            />
          ) : null}
          {showthree ? (
            <Snackbar
              ref={snackbarRef}
              message="Mail Recieved Successfully!"
              color="#FF0033"
              onClick={() => {
                dispatch(changeShowThree(false));
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
