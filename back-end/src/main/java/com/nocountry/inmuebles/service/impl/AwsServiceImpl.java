package com.nocountry.inmuebles.service.impl;

import com.nocountry.inmuebles.model.entity.Image;
import software.amazon.awssdk.core.exception.SdkClientException;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import com.nocountry.inmuebles.service.abstraction.AwsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetUrlRequest;


import java.io.IOException;

@Service
public class AwsServiceImpl implements AwsService {
    @Autowired
    private S3Client awsConfig;
    @Value("${aws.bucketName}")
    private String bucketName;
    @Override
    public Image uploadImage(MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        try{
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(fileName)
                    .build();
            awsConfig.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));
            String imageUrl = awsConfig.utilities().getUrl(GetUrlRequest.builder().bucket(bucketName).key(fileName).build()).toExternalForm();
            Image image = new Image();
            image.setRoute(imageUrl);
            return image;
        }catch (SdkClientException e){
            throw new RuntimeException("Error: No se cargo el archivo en aws"+ e.getMessage());
        }
    }

}
