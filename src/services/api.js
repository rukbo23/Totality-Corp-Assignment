export const fetchData = async () => {
  try {
    const response = await fetch("https://api.ccbp.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const sendData = async (data) => {
  try {
    const response = await fetch("https://api.ccbp.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error sending data:", error);
    throw error;
  }
};
