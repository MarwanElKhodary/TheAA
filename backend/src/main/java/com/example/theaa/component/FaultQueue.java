package com.example.theaa.component;

import java.util.LinkedList;
import java.util.Queue;

import org.springframework.stereotype.Component;

import com.example.theaa.entity.Fault;

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
