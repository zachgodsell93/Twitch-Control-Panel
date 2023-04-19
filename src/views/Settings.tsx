import React from "react";
import { SettingsCard } from "../components/settings/SettingsCard";

const Settings: React.FC<SettingsProps> = (props) => {
  const [authCheckDone, setAuthCheckDone] = React.useState(false);

  return (
    <div className="px-20 pt-20">
      <SettingsCard authCheck={authCheckDone} />
    </div>
  );
};

type SettingsProps = {};

export { Settings };
