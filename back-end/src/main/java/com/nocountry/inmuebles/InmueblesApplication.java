package com.nocountry.inmuebles;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InmueblesApplication {
	private static final Logger logger = LoggerFactory.getLogger(InmueblesApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(InmueblesApplication.class, args);
		logger.info("========================");
		logger.info("c14-27-m-java-react");
		logger.info("========================");
	}

}
