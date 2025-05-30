import React from "react";
const compoi = {};
compoi["Help"] = React.lazy(() => import("./components/Help.js"));
compoi["Jobs"] = React.lazy(() => import("./components/Jobs.js"));
compoi["AddJob"] = React.lazy(() => import("./components/AddJob.js"));
compoi["Control"] = React.lazy(() => import("./components/Control.js"));

const multi = {
  default: "control",
  jobs: [["Jobs"], ["Jobs", "Help"], ["Jobs", "AddJob", "Help"]],
  addjob: [["AddJob"], ["AddJob", "Jobs"], ["AddJob", "Jobs", "Help"]],
  help: [["Help"], ["Help", "Control"]],
  control: [["Control"], ["Control", "Help"]],
};

export { compoi, multi };
