package com.sunbeam.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.dao.GalleryDao;
import com.sunbeam.entities.Gallery;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/gallery")
@CrossOrigin("*") 
public class GalleryController {

    @Autowired
    private GalleryDao galleryRepository;

    @PostMapping("/upload")
    public ResponseEntity<String> uploadImage(
            @RequestParam("section") String section,
            @RequestParam("file") MultipartFile file) throws IOException {

        Gallery gallery = new Gallery();
        gallery.setSection(section);
        gallery.setImage(file.getBytes());

        galleryRepository.save(gallery);

        return ResponseEntity.ok("Image uploaded successfully!");
    }

    @GetMapping
    public List<Gallery> getGallery() {
        return galleryRepository.findAll();
    }

    @GetMapping("/{id}/image")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Gallery gallery = galleryRepository.findById(id).orElseThrow();
        return ResponseEntity.ok()
                .contentType(MediaType.IMAGE_JPEG) // or PNG if needed
                .body(gallery.getImage());
    }
}
