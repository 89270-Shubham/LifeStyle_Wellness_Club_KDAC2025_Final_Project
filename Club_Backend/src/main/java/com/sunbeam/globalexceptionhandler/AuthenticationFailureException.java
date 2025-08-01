package com.sunbeam.globalexceptionhandler;

public class AuthenticationFailureException extends RuntimeException {
	public AuthenticationFailureException(String mesg) {
		super(mesg);
	}
}
