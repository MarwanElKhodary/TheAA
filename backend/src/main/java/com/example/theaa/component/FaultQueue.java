package com.example.theaa.component;

import java.util.LinkedList;
import java.util.Queue;

import org.springframework.stereotype.Component;

import com.example.theaa.entity.Fault;

//TODO: Refactor based on https://medium.com/@mertcakmak2/aws-standard-sqs-queue-with-spring-boot-974c163e0616

// ? Look at AWS SQS structure and calls and it should be emulated in spring boot
// ? Read more into beans as well
// ? Make this but easier 
// ? What exactly does this do?
@Component
public class FaultQueue {
    private final Queue<Fault> queue = new LinkedList<>();

    public Boolean enqueue(Fault fault) {
        return queue.offer(fault);
    }

    public Fault dequeue() {
        return queue.poll();
    }
}
