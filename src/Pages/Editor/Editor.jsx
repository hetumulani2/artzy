import React, { useState } from "react";
import { FaImage, FaFont, FaTshirt, FaUpload, FaTimes,FaTrash ,FaUndoAlt,FaRedoAlt} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import style from "./Editor.module.css";
import image1 from '../../Images/jackets.jpg';


const CustomEditor = () => {
  const [showUploadImage, setShowUploadImage] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [size, setSize] = useState({ width: 200, height: 200 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [uploadedImage, setUploadedImage] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleUploadImageClick = () => {
    setShowUploadImage(true);
  };

  const handleCloseUploadImage = () => {
    setShowUploadImage(false);
  };

  const handleTextClick = () => {
    setShowEditor(true);
  };

  const handleCloseEditor = () => {
    setShowEditor(false);
  };

  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = () => {
    setUploadedImage(null);
  };

  const handleRotateLeft = () => {
    setRotationAngle(rotationAngle - 90);
  };

  const handleRotateRight = () => {
    setRotationAngle(rotationAngle + 90);
  };

  const onResize = (event, { size }) => {
    setSize(size);
  };

  const onDrag = (event, ui) => {
    setPosition({
      x: ui.x,
      y: ui.y,
    });
  };

  return (
    <>
      <section style={{ paddingTop: "100px" }}>
        <Container>
          <div className="row ">
            <h1 className="mb-5">Customize Your Art</h1>
            <div className="col-4 ">
              <div className="sidebar">
                <div className={style.sidebarSection} onClick={handleUploadImageClick}>                 
                  <h2 className="d-flex align-items-center gap-2"> <FaImage /> Upload Image</h2>
                </div>
                {showUploadImage && (
                  <div className="upload-image-container" >
                    <div className="upload-image" >
                      <p>By uploading your artwork you agree to our image upload terms and acknowledge that you have full legal rights to use the images you upload.</p>
                      <input type="file" accept=".jpg, .jpeg, .png, .gif, .webp, .svg, .eps, .ai" onChange={handleImageInputChange} />
                      <button onClick={handleCloseUploadImage}>Close</button>
                    </div>
                  </div>
                )}
                <div className={style.sidebarSection} onClick={handleTextClick}>
                 
                  <h2 className="d-flex align-items-center gap-2"> <FaFont /> Add Text</h2>
                </div>
                {showEditor && (
                  <div className="editor-container">
                    <Editor
                      editorState={editorState}
                      onEditorStateChange={setEditorState}
                      wrapperClassName="editor-wrapper"
                      editorClassName="editor-main"
                      toolbarClassName="toolbar-class"
                    />
                    <button onClick={handleCloseEditor}>Close</button>
                  </div>
                )}
              
                <div className={style.sidebarSection}>
                 
                  <h2 className="d-flex align-items-center gap-2"> <FaTshirt /> Product</h2>
                
                </div>
              </div>
            </div>
            <div className="col-6">
              <div style={{ position: 'relative' }}>
                <img src={image1} alt="" className="w-100 h-100 d-block img-fluid" />
                {uploadedImage && (
                  <div style={{ position: 'relative', transform: `rotate(${rotationAngle}deg)` }}>
                    <img
                      src={uploadedImage}
                      alt=""
                      className="uploaded-image"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: size.width,
                        height: size.height,
                      }}
                    />
                    <div onClick={handleDeleteImage}
                      style={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        background: 'rgba(255, 255, 255, 0.7)',
                        borderRadius: '50%',
                        padding: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      <FaTrash />
                    </div>
                    <div onClick={handleRotateLeft}
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        background: 'rgba(255, 255, 255, 0.7)',
                        borderRadius: '50%',
                        padding: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      <FaUndoAlt />
                    </div>
                    <div onClick={handleRotateRight}
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        background: 'rgba(255, 255, 255, 0.7)',
                        borderRadius: '50%',
                        padding: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      <FaRedoAlt />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CustomEditor;
