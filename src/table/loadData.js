const axios = require("axios");

// config: { create: {baseURL: "", headers: {}}, requests: ["api", "auth"] }
const loadData = async (config) => {
  try {
    const api = axios.create(config.create);

    // Promise.all()

    if (config.model) {
    }

    let res = await api(config.request);

    const devices = res.data;

    return { devices };
  } catch (error) {
    return { error };
  }
};
