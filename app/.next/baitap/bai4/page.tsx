import React from 'react';
import axios from 'axios';

const ErrorHandlingPage = ({ data, error }) => {
  if (error) {
    return (
      <div>
        <h1>Error Occurred</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>API Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// Sử dụng getServerSideProps để lấy dữ liệu SSR và xử lý lỗi
export async function getServerSideProps() {
  try {
    const res = await axios.get('https://example.com/invalid-endpoint');
    const data = res.data;

    return {
      props: {
        data,
        error: null,
      },
    };
  } catch (error) {
    let errorMessage;

    if (error.response) {
      // Khi response trả về với status code nằm ngoài dải 2xx
      if (error.response.status === 404) {
        errorMessage = '404: Resource not found.';
      } else if (error.response.status === 500) {
        errorMessage = '500: Internal server error.';
      } else {
        errorMessage = `Error: ${error.response.status} ${error.response.statusText}`;
      }
    } else if (error.request) {
      // Khi không nhận được response từ API
      errorMessage = 'No response received from the server.';
    } else {
      // Lỗi xảy ra trong quá trình thiết lập yêu cầu
      errorMessage = 'Error in setting up the request.';
    }

    return {
      props: {
        data: null,
        error: errorMessage,
      },
    };
  }
}

export default ErrorHandlingPage;