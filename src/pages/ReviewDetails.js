import React from "react";
import { useParams } from "react-router-dom";

export default function ReviewDetails() {
  const { id } = useParams();
  return <div>review details = {id}</div>;
}
