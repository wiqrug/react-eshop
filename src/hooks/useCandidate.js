import { getCandidate } from "api/candidates/getCandidate";
import { useEffect, useState } from "react";

export const useCandidate = (candidateNumber) => {
  const [candidate, setCandidate] = useState(null);
  
  useEffect(() => {
            getCandidate(candidateNumber).then((data) => {
            setCandidate(data);
        })
  }, [candidate]);

  return candidate;
};
