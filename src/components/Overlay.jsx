import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${
          progress === 100 ? "loader--disappear" : ""
        }`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
         {!end &&  <h1 className="logo">
            insket
           
          </h1>}
          <p className="intro__scroll">滑动滚轮开始</p>
          <button
            className="explore"
            onClick={() => {
              setPlay(true);
            }}
          >
            start
          </button>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">
          您可以通过以下方式与我联系
        </p>
        <div className="outro__text">
          Wechat: 17721557807
        </div>
        <div className="outro__text">
          电话: 17721557807 / 18168060443
        </div>
      </div>
    </div>
  );
};
