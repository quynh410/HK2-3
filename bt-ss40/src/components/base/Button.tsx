import React from 'react'

type PropsTypes = {
    title: string;
    type : "primary" | "danger" | "success" | "warning" ;
    size : string;
}
const btnPrimary = "primary";
const btnDanger = "danger";
const btnSuccess = "success";
const btnWarning = "warning";
export default function Button({ title, type, size } :PropsTypes) {
  return (
    <>
        <button className={`btn btn-${type === btnPrimary ? btnPrimary : type === btnDanger ? btnDanger : type === btnSuccess ? btnSuccess : btnWarning }`}
        >
            {title}</button>
    </>
  )
}
