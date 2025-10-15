import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastDemo() {
  // Toast للـ Parent
  const notifyParent = () => {
    toast("Hello from Parent!", {
      position: "top-right",
      autoClose: 3000,
      style: { backgroundColor: "lightblue", color: "black", fontWeight: "bold" },
    });
  };

  // Toast للـ Child
  const notifyChild = () => {
    toast("Hello from Child!", {
      position: "bottom-left",
      autoClose: 5000,
      style: { backgroundColor: "lightgreen", color: "white", fontStyle: "italic" },
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Parent and Child Toast Demo</h1>

      {/* Parent */}
      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
        <h2>Parent Component</h2>
        <button onClick={notifyParent} style={{ padding: "10px", marginBottom: "10px" }}>
          Show Parent Toast
        </button>

        {/* Child داخل نفس الصفحة */}
        <div style={{ marginTop: "20px" }}>
          <h3>Child Component</h3>
          <button onClick={notifyChild} style={{ padding: "10px" }}>
            Show Child Toast
          </button>
        </div>
      </div>

      {/* ToastContainer يجب أن يكون موجود مرة واحدة */}
      <ToastContainer />
    </div>
  );
}

export default ToastDemo;
