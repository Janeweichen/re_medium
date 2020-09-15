import FroalaEditor from 'froala-editor'

import 'froala-editor/js/languages/zh_tw.js'
import 'froala-editor/js/plugins/colors.min.js'	   
import 'froala-editor/js/plugins/emoticons.min.js'	
import 'froala-editor/js/plugins/save.min.js'
import 'froala-editor/js/plugins/video.min.js'	
import 'froala-editor/js/plugins/image.min.js'	

document.addEventListener('turbolinks:load', function(event){
    let editor = new FroalaEditor('#story_content', {
        language: 'zh_tw',
        spellcheck: false,
        imageUploadURL: '/api/upload_image'
    })
})