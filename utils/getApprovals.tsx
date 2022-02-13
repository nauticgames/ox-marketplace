import { Moralis } from "moralis";

const OWNER_FILTER = process.env.NODE_ENV === "production" ? "src" : "owner";

const getApprovals = async (setError, setLastApproval, account) => {
  try {
    const query = new Moralis.Query("TokenApprovals");
    query.equalTo(OWNER_FILTER, account);

    const approvals = await query.find();

    if (!approvals.length) {
      setLastApproval(0);
    } else {
      setLastApproval(
        process.env.NODE_ENV === "production"
          ? approvals[approvals.length - 1].attributes.wad
          : approvals[approvals.length - 1].attributes.value
      );
    }

    return;
  } catch (error) {
    return setError(true);
  }
};

export default getApprovals;
