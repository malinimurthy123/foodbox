package foodboxspringb.controller;


import foodboxspringb.model.Customer;
import foodboxspringb.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200",allowedHeaders = "*")
@RestController
public class CustomerController {

    @Autowired
    private CustomerRepository customerRepository;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer customer, HttpSession session) {
        session.setAttribute("cust_email", customer.getEmail());
        return customerRepository.save(customer);
    }

    @SuppressWarnings("rawtypes")
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/customers/{email}")
    public boolean verifyLogin(@RequestBody Map loginData, @PathVariable(name = "email") String email, HttpSession session) {
        String lemail = (String) loginData.get("email");
        String lpassword = (String) loginData.get("password");
        Customer customer = customerRepository.findByEmail(email);
        if(customer!= null && customer.getEmail().equals(lemail) && customer.getPassword().equals(lpassword)) {
            session.setAttribute("cust_email", lemail);
            return true;
        }else {
            return false;
        }
    }

    @GetMapping("/customers")
    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    @GetMapping("/customers/search/{keyword}")
    public List<Customer> searchCustomer(@PathVariable String keyword){
        return customerRepository.searchCustomer(keyword);
    }

    @DeleteMapping("/customers/{email}")
    public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable String email){
        Customer customer = customerRepository.findByEmail(email);
        customerRepository.delete(customer);
        Map<String, Boolean> map = new HashMap<>();
        map.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(map);
    }
    @GetMapping("/customers/{cust_email}")
    public Customer getCustomer(@PathVariable String cust_email) {
        return customerRepository.findByEmail(cust_email);

    }
}