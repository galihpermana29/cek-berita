import axios from "axios";

export const GoogleSearch = async (term) => {
  const { data } = await axios.get("https://www.googleapis.com/customsearch/v1", {
    params: {
      key: "AIzaSyD78WdS54LELjOdgqMXIOpeWjqYjt-yXcY",
      cx: "863cc6565da6e411d",
      q: `${term} site:cekfakta.com OR site:turnbackhoax.id OR site:cnnindonesia.com OR site:liputan6.com OR site:detik.com OR site:tempo.co OR site:antaranews.com`,
    },
  });

  return data;
};
