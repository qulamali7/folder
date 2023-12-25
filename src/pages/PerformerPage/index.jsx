import React from "react";
import Sponsor from "../../components/Sponsor";
import Performer from "../../components/Performer";
import PageTitle from "../../components/PageTitle";

const PerformerPage = () => {
  return (
    <>
      <PageTitle />
      <Performer />
      <Sponsor />
    </>
  );
};

export default PerformerPage;
