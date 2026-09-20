using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using portfolio_backend.Models;
using portfolio_backend.Data;

[Route("api/[controller]")]
[ApiController]
public class ContactMessagesController : ControllerBase
{
    private readonly AppDbContext _context;
    public ContactMessagesController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/ContactMessage
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ContactMessage>>> GetContactMessage()
    {
        return await _context.Messages.ToListAsync();
    }

    // GET: api/ContactMessage/5
    [HttpGet("{id}")]
    public async Task<ActionResult<ContactMessage>> GetContactMessage(int id)
    {
        var contactmessage = await _context.Messages.FindAsync(id);

        if (contactmessage == null)
        {
            return NotFound();
        }

        return contactmessage;
    }

    // PUT: api/ContactMessage/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutContactMessage(int? id, ContactMessage contactmessage)
    {
        if (id != contactmessage.Id)
        {
            return BadRequest();
        }

        _context.Entry(contactmessage).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ContactMessageExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // POST: api/ContactMessage
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<ContactMessage>> PostContactMessage(ContactMessage contactmessage)
    {
        _context.Messages.Add(contactmessage);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetContactMessage", new { id = contactmessage.Id }, contactmessage);
    }

    // DELETE: api/ContactMessage/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteContactMessage(int? id)
    {
        var contactmessage = await _context.Messages.FindAsync(id);
        if (contactmessage == null)
        {
            return NotFound();
        }

        _context.Messages.Remove(contactmessage);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ContactMessageExists(int? id)
    {
        return _context.Messages.Any(e => e.Id == id);
    }
}
