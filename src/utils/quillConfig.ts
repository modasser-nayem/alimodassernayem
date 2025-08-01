import hljs from "highlight.js";
import "highlight.js/styles/github.css";

hljs.configure({
   languages: ["javascript", "python", "ruby", "java", "cpp"], // Add more languages as needed
});

const modules = {
   toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],
      ["link", "image", "video", "formula"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ["clean"], // remove formatting button
   ],
   syntax: {
      highlight: (text: string) => hljs.highlightAuto(text).value,
   },
};

const formats = [
   "header",
   "bold",
   "italic",
   "underline",
   "strike",
   "blockquote",
   "list",
   "bullet",
   "indent",
   "link",
   "image",
   "code-block", // Add code-block to formats
   "video", // Include video for embedding videos
   "formula", // Include formula for scientific and mathematical equations
];

export { modules, formats };
