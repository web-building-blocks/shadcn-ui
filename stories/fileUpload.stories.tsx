import { Button } from "@/registry/default/ui/button"
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FileUpload from './fileUpload-demo';

export default {
  title: 'Components/FileUpload',
  component: FileUpload,
  argTypes: {
    // Text of the file selection button
    chooseFileText: {
      control: 'text',
      description: 'Text displayed on the file choose button',
      defaultValue: 'Choose File',
    },
    // Text of the upload button
    uploadButtonText: {
      control: 'text',
      description: 'Text displayed on the upload button',
      defaultValue: 'Upload File',
    },
    // Text when no file is selected
    noFileChosenText: {
      control: 'text',
      description: 'Text displayed when no file is selected',
      defaultValue: 'No file chosen',
    },
    // Button background colour
    buttonBackgroundColor: {
      control: 'color',
      description: 'Background color of the buttons',
      defaultValue: '#007bff', 
    },
    // Button Text Colour
    buttonTextColor: {
      control: 'color',
      description: 'Text color of the buttons',
      defaultValue: '#ffffff', 
    },
  },
} as ComponentMeta<typeof FileUpload>;


const Template: ComponentStory<typeof FileUpload> = ({ 
  chooseFileText, 
  uploadButtonText, 
  noFileChosenText, 
  buttonBackgroundColor, 
  buttonTextColor 
}) => {
  const [selectedFile, setSelectedFile] = React.useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file ? file.name : "");
  };

  const triggerFileInputClick = () => {
    const fileInput = document.getElementById("file-upload");
    if (fileInput) {
      fileInput.click(); // trigger a click event
    }
  };

  return (
    <div className="file-upload-wrapper">
      <div className="file-upload-content">
        <input
          type="file"
          id="file-upload"
          onChange={handleFileChange}
          className="file-upload-input"
          style={{ display: "none" }} // Hide the default file input box
        />
        <div className="file-upload-control">
          <button
            style={{
              backgroundColor: buttonBackgroundColor, 
              color: buttonTextColor, 
              border: '1px solid #ccc', 
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
            onClick={triggerFileInputClick}
          >
            {chooseFileText}
          </button>
          <span className="file-name px-3">
            {selectedFile || noFileChosenText}
          </span>
        </div>
      </div>
      {selectedFile && (
        <div className="file-display-container mt-4">
          <button
            style={{
              backgroundColor: buttonBackgroundColor, 
              color: buttonTextColor, 
              border: '1px solid #ccc', 
              padding: '0.5rem 1rem',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
          >
            {uploadButtonText}
          </button>
        </div>
      )}
    </div>
  );
};


export const Default = Template.bind({});
Default.args = {
  chooseFileText: 'Choose File',
  uploadButtonText: 'Upload File',
  noFileChosenText: 'No file chosen',
  buttonBackgroundColor: '#000000',
  buttonTextColor: '#ffffff',
};
