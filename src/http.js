/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author RK
 * @license MIT
 *
 **/

class EasyHTTP {
  // Make HTTP Get request
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;

    // return new Promise((res, rej) => {
    //   fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => res(data))
    //     .catch((err) => rej(err));
    // });
  }
  // Make HTTP Post request

  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    const data2 = await response.json();
    return data2;

    // return new Promise((res, rej) => {
    //   fetch(url, {
    //     method: "POST",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify(data),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => res(data))
    //     .catch((err) => rej(err));
    // });
  }

  // Make an HTTP PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });

    const data2 = await response.json();
    return data2;

    // return new Promise((res, rej) => {
    //   fetch(url, {
    //     method: "PUT",
    //     headers: { "Content-type": "application/json" },
    //     body: JSON.stringify(data),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => res(data))
    //     .catch((err) => rej(err));
    // });
  }

  // Make an HTTP DELETE request
  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    const data = "Post deleted";
    return data;

    // return new Promise((res, rej) => {
    //   fetch(url, {
    //     method: "DELETE",
    //     headers: { "Content-type": "application/json" },
    //   })
    //     .then((res) => res.json())
    //     .then(() => res("Resourse deleted"))
    //     .catch((err) => rej(err));
    // });
  }
}

export const http = new EasyHTTP();
