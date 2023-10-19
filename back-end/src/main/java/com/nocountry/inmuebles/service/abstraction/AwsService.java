package com.nocountry.inmuebles.service.abstraction;

import com.nocountry.inmuebles.model.entity.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URL;
import java.nio.file.Path;

public interface AwsService {
    Image uploadImage(MultipartFile file) throws IOException;
}
