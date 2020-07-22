#### This Repository Follow Tutsplus course for [Javascript Unit test with mocha, chai and sinon](https://code.tutsplus.com/courses/javascript-unit-testing-with-mocha-chai-and-sinon)

##### Examples:

every clip has include code or demo has been written on separated folder under folder for which Chapter this clip exists, Here List of Chapters and clips

 - [1. Introduction](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch01)
	
	- [1.2 Getting Started](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch01/02)
	- [1.3 Writing Your First Test](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch01/03)
	- [1.4 Building a Test Suite](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch01/04)

 - [2. Fundamental Concepts of JavaScript Unit Testing](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch02)

	- [2.1 Dependency Injection](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch02/06)
	- [2.2 Asynchronous Testing](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch02/07)
	- [2.3 Before and After Hooks](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch02/08)
	- [2.4 Segmenting with Skip and Only](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch02/09)
	- [2.5 Fixtures](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch02/10)

 - [3. Using Chai Assertions](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch03)
	
	- [3.1 Chai Assert](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch03/11)
	- [3.2 Chai Should](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch03/12)
	- [3.3 Chai Expect](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch03/113)

 - [4. Putting it All Together](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch04)
	
	- [4.1 Running Mocha Tests in the Browser](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch04/14)
	- [4.2 Automated Browser Testing with Testling](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch04/15)
	- [4.3 Continuous Integration with Travis CI](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch04/16)

- [5. More Control with Sinon.JS](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch05)

	- [5.1 Introduction to Sinon](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch05/17)
	- [5.2 Sinon Spies](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch05/18)
	- [5.3 Sinon Stubs](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch05/19)
	- [5.4 Sinon Mocks](https://github.com/ahmed-hamdy90/tutsplus-javascript-unit-test-with-mocha-and-chai/tree/master/Ch05/20)

##### Run Examples:

You can Run every example using Docker(every one has his own Dockerfile file), if you don't have Docker, you can install Docker Engine from [Here](https://docs.docker.com/engine/install)

- First build docker image

```shell
docker build -t mochacourse .
```

- Second run built image:
  
  - Next command to run examples except `Ch01/02` and `Ch04/14` examples

  ```shell
    docker run --name mochacourse mochacourse
  ```
  
  - Run `Ch01/02` and `Ch04/14` examples

  ```shell
    docker run --name mochacourse -p 9000:9000 mochacourse
  ```

##### Notice:

About Testing example under `Ch04/16` related to run tests suite uisng Travis CI prefered to use `use-travis-ci` branch as travis-ci file into root files