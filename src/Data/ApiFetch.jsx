import axios from "axios";

const FetchData = async (quey) => {
  let res = await axios.get(
    `https://api.github.com/search/repositories?q=stars:%3E1+language:${quey}`
  );
  // console.log(res.data);
  return res.data;
};
export default FetchData;
