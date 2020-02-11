import React from 'react';
import style from './FormWithImg.module.css';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { connect } from 'react-redux';
import { saveNewsImg, createNews } from '../../../../redux/newsReduser';


class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: ''
      };
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      this.props.createNews()
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let imagePreview = null;
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} className={style.uploadImgTest} />);
      }
  
      return (
        <div>
          <form onSubmit={this._handleSubmit}>
            <input type="file" onChange={this._handleImageChange} />
            <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
          </form>
          {imagePreview}
        </div>
      )
    }
  
  }

  export default ImageUpload;
















// class FormWithImg extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             uploadStatus: false
//         }
//         this.handleUploadImage = this.handleUploadImage.bind(this);
//     }


    // handleUploadImage(e) {
    //     e.preventDefault();



    //     const formData = new FormData();
    //     formData.append('file',  this.uploadInput.files[0]);
        // formData.append('filename', this.fileName.value);
        // this.props.createNews(formData);
        // console.log(formData);

        // axios.post('http://localhost:8080/api/news', data)
        //     .then(function (response) {
        //         this.setState({ imageURL: `http://localhost:8080/${response.body.file}`, uploadStatus: true });
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    // }

    // render() {
    //     return (
            // <div>
            //     <form onSubmit={this.handleUploadImage} id="upload" autocomplete="on">
            //         <div className={style.container}>
            //             <input type="file" name="fileName" id="fileName" ref={(ref) => { this.uploadInput = ref; }} className={style.upload} accept="image/*" />
            //             {/* <label for="file" className="">
            //                 Choose file
            //             </label> */}
            //             <input type="submit" value="upload" className={style.uploadBtn} />
            //         </div>
            //     </form>
            // </div>
//         )
//     }
// }

// export default connect(null, {saveNewsImg, createNews})(FormWithImg);








// const express = require('express');
// const app = express();
// const upload = require('express-fileupload');

// app.use(upload());
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('index');
// });

// app.post('/upload', (req, res) => {
//     if(req.files) {
//         // console.log(req.files.fileName);
//         const file = req.files.fileName;
//         const filename = file.name;
//         file.mv('./upload/' + filename, (err) => {
//             if(err) {
//                 console.log(err);
//                 res.send('Error upload!');
//             } else {
//                 res.send('Done!')
//             }
//         });
//     }
// });

// const port = 5000; // останоыился 15:55 Uploading Files to MongoDB With GridFS (Node.js App)

// app.listen(port, () => console.log(`Server listen on ${port}`));