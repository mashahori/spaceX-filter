import { useState, useRef } from 'react';
import { Label, Container, FileExt, ResetBtn, ImgWrapper } from './styles';

const FileInput = ({ id, name, label, fileExt }) => {
  const [msg, setMsg] = useState(label);
  const [hasFile, setHasFile] = useState(false);
  const fileInput = useRef(null);

  const handleLabel = function(e) {
    if (e.target.files[0]) {
      setHasFile(true);
      setMsg(e.target.files[0].name);
    }
  };

  const handleInputReset = function() {
    fileInput.current.value = '';
    setHasFile(false);
    setMsg(label);
  };

  return (
    <Label>
      <input
        type="file"
        id={id}
        name={name}
        accept=".doc, .docx, .pdf, .rtf, .txt"
        onChange={handleLabel}
        ref={fileInput}
      ></input>
      <ImgWrapper>
        <img
          src="icons/page-facing-up.png"
          width="25"
          height="25"
          aria-label="file icon"
        />
      </ImgWrapper>
      <Container>
        <span>{msg}</span>
        <ResetBtn
          type="button"
          onClick={handleInputReset}
          hasFile={hasFile}
          aria-label="Удалить файл"
        >
          <svg
            width="24"
            height="23"
            viewBox="0 0 13 14"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3502 9.69769L9.11887 10.929L6.51443 8.32458L3.90314 10.9359L2.60445 9.63716L5.21573 7.02588L2.61128 4.42143L3.84262 3.1901L6.44707 5.79454L9.05127 3.19034L10.35 4.48903L7.74576 7.09324L10.3502 9.69769Z"
              fill="currentColor"
            />
          </svg>
        </ResetBtn>
        <FileExt>{fileExt}</FileExt>
      </Container>
    </Label>
  );
};

export default FileInput;
