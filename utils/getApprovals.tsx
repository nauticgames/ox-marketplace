import { Moralis } from "moralis";

const getWBNBApprovals = async (setError, setLastApproval, account) => {
  try {
    const query = new Moralis.Query("TokenApprovals");
    query.equalTo("src", account);

    const approvals = await query.find();

    if (!approvals.length) {
      setLastApproval(0);
    } else {
      setLastApproval(approvals[approvals.length - 1].attributes.wad);
    }

    return;
  } catch (error) {
    return setError(true);
  }
};

export { getWBNBApprovals };
