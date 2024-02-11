export const baseUrl = "http://localhost:5000";

export const postRequest = async (url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await response.json();
  if (!response.ok) {
    let message;

    if (data?.error) {
      message = data.message;
    } else {
      message = data;
    }
    return { error: true, message };
  }

  return data;
};

export const getRequest = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
    let message = "An error occured ...";

    if (data?.error) {
      message = data.message;
    }
    return { error: true, message };
  }

  return data;
};

export const deleteRequest = async (url) => {
  const response = await fetch(url, {
    method: "DELETE",
  });
  const data = await response.text();
  if (!response.ok) {
    let message = "An error occured ...";

    if (data?.error) {
      message = data.message;
    }
    return { error: true, message };
  }

  return data;
};
