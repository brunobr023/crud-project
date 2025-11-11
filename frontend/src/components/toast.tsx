// import React, { useEffect} from 'react';
// import './css/Toast.css';


// // Definição dos tipos de propriedades que o componente Toast aceitará
// type ToastProps = {
//   message: string;
//   duration?: number; // duração em milissegundos
//   type?: 'success' | 'error' | 'info'; // tipos de toast
//   onClose?: () => void; // callback quando o toast fechar
// };

// const Toast: React.FC<ToastProps> = ({ message, type, onClose}) => {
//     const iconMap = {
//         //Definindo os Icones para cada Toast.
//         success: <SucesssIcon/>
//         error: <ErrorIcon/>
//         info: <InfoIcon/>
//     };
//     //O icone do toast tem que ser realcionado a propriedade a cima.
//     const toastIcon = iconMap[type] || null;

// }

// //https://blog.logrocket.com/how-to-create-custom-toast-component-react/