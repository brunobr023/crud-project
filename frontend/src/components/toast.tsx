import React, { useEffect, useState, type JSX } from "react";
import "./toast.css";

// Tipos aceitos pelo Toast
type ToastProps = {
  message: string;
  duration?: number; // duração em ms
  type?: "success" | "error" | "info";
  onClose?: () => void;
};

// Ícones SVG
const SuccessIcon = () => (
  <svg height="20" width="20" viewBox="0 0 511.999 511.999" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#1fd143"
      d="M494.328,98.756l-33.279-33.279c-9.99-9.99-26.185-9.99-36.175,0L172.007,318.344
      c-3.877,3.877-10.163,3.877-14.04,0L87.11,247.488c-9.99-9.99-26.185-9.99-36.175,0l-33.26,33.26c-9.99,9.99-9.99,26.185,0,36.175
      l129.581,129.581c9.997,9.997,26.209,9.989,36.194-0.019l310.896-311.572C504.318,124.919,504.309,108.738,494.328,98.756z"
    />
  </svg>
);

const ErrorIcon = () => (
  <svg height="20" width="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <circle fill="#FF757C" cx="256" cy="256" r="245.801" />
    <polygon
      fill="#F2F2F2"
      points="395.561,164.038 347.961,116.44 256,208.401 164.039,116.44 116.439,164.038 208.401,256 116.439,347.962 164.039,395.56 256,303.599 347.961,395.56 395.561,347.962 303.599,256"
    />
  </svg>
);

const InfoIcon = () => (
  <svg height="20" width="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <circle fill="#1f4ed1" cx="256" cy="256" r="245.801" />
    <circle fill="#F2F2F2" cx="256" cy="256" r="190.725" />
    <circle fill="#1f4bd1" cx="256" cy="143.809" r="31.618" />
    <path
      fill="#1f1fd1"
      d="M273.849,210.703h-35.697c-7.605,0-13.769,6.164-13.769,13.769V382.98
      c0,7.605,6.164,13.769,13.769,13.769h35.697c7.605,0,13.769-6.164,13.769-13.769V224.472
      C287.618,216.868,281.453,210.703,273.849,210.703z"
    />
  </svg>
);

const Toast: React.FC<ToastProps> = ({ message, duration = 3000, type = "info", onClose }) => {
  const [hide, setHide] = useState(false);

  const iconMap: Record<string, JSX.Element> = {
    success: <SuccessIcon />,
    error: <ErrorIcon />,
    info: <InfoIcon />,
  };

  const toastIcon = iconMap[type] || null;

  useEffect(() => {
    const fadeOutTime = duration - 300;
    const fadeTimer = setTimeout(() => setHide(true), fadeOutTime);
    const removeTimer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [duration, onClose]);

  return (
    <div className={`toast toast-${type} ${hide ? "toast-hide" : ""}`}>
      {toastIcon}
      <span className="toast-message">{message}</span>
    </div>
  );
};

export default Toast;