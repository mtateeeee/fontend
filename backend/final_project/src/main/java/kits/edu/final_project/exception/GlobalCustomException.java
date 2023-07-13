package kits.edu.final_project.exception;

import kits.edu.final_project.payload.response.BaseResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalCustomException {
    @ExceptionHandler(CustomFileNotFoundException.class)
    public ResponseEntity<?> handlerFileNotFound(Exception e){

        BaseResponse response=new BaseResponse();
        response.setStatusCode(500);
        response.setData(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @ExceptionHandler(CustomException.class)
    public ResponseEntity<?> handlerCustomException(Exception e){

        BaseResponse response=new BaseResponse();
        response.setStatusCode(500);
        response.setData(e.getMessage());

        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
