
package com.example.todo.service;

import com.example.todo.model.Task;
import com.example.todo.repository.TaskRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> getAll() {
        return repository.findAll();
    }

    public Task getById(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Task not found with id: " + id));
    }

    public Task save(Task task) {
        if (task == null) {
            throw new IllegalArgumentException("Task cannot be null");
        }
        if (task.getTitle() == null || task.getTitle().trim().isEmpty()) {
            throw new IllegalArgumentException("Task title cannot be empty");
        }
        return repository.save(task);
    }

    public Task update(Task task) {
        if (task.getId() == null) {
            throw new IllegalArgumentException("Task ID cannot be null");
        }
        if (!repository.existsById(task.getId())) {
            throw new IllegalArgumentException("Task not found with id: " + task.getId());
        }
        return repository.save(task);
    }

    public Task completeTask(Long id) {
        Task task = getById(id);
        task.setCompleted(true);
        return repository.save(task);
    }

    public void delete(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("Task ID cannot be null");
        }
        if (!repository.existsById(id)) {
            throw new IllegalArgumentException("Task not found with id: " + id);
        }
        repository.deleteById(id);
    }
}
