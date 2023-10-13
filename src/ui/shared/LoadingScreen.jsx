const LoadingScreen = () => {
  return (
    <div className="absolute inset-0 bg-slate-100/80 backdrop-blur-sm grid place-content-center z-[999]">
      <span
        className="w-12 h-20 -mt-[10%]"
        style={{
          "--c": "no-repeat linear-gradient(#000 0 0)",
          background: "var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%",
          backgroundSize: "20% 50%",
          animation: "b6 1s infinite linear",
        }}
      ></span>
    </div>
  );
};

export default LoadingScreen;
