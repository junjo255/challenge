/**
 * Design Text Editor (Doubly Linked List)
 * Build a text editor class with the following functions,
 *    moveCursorLeft(),
 *    moveCursorRight(),
 *    insertCharacter(char) //insert the char right before cursor
 *    backspace() //delete the char right before cursor
 *
 *    Follow-up
 *    Implement undo() //undo the last edit. Can be called multiple times until all edits are cancelled.
 *    All functions above should take O(1) time.
 *
 *    Example
 *    ( '|' denotes where the cursor locates. 'text' shows what's been written to the text editor. )
 *
 *    Start with empty text
 *    text = "|"
 *
 *    insertCharacter('a')
 *    text = "a|"
 *
 *    insertCharacter('b')
 *    text = "ab|"
 *
 *    insertCharacter('c')
 *    text = "abc|"
 *
 *    moveCursorLeft()
 *    text = "ab|c"
 *
 *    moveCursorLeft()
 *    text = "a|bc"
 *
 *    backspace()
 *    text = "|bc"
 *
 *    moveCursorLeft()
 *    text = "|bc" (nothing happens since cursor was on the leftmost position)
 *
 *    undo()
 *    text = "a|bc"
 *
 *    undo()
 *    text = "ab|c"
 *
 *    undo()
 *    text = "abc|"
 *
 *    undo()
 *    text = "ab|"
 *
 *    undo()
 *    text = "a|"
 *
 * Implementation
 *    import java.util.Stack;
 *
 *    class CharNode {
 *         char ch;
 *         CharNode prev;
 *         CharNode next;
 *
 *         public CharNode(char ch) { this.ch = ch; }
 *    }
 *
 *    class Edit {
 *         String edition; //"DEL", "INS", "LEFT", "RIGHT"
 *         CharNode data;
 *
 *         public Edit(String edition, CharNode cur) {
 *              data = cur;
 *              this.edition = edition;
 *         }
 *    }
 *
 *    public class TextEditor {
 *         private Stack<Edit> undo_stack;
 *         private CharNode cursor;
 *         private CharNode end;
 *
 *         public TextEditor() {
 *              undo_stack = new Stack();
 *              end = new CharNode('\0');
 *              cursor = end;
 *         }
 *
 *         public void moveCursorLeft() {
 *              if(cursor.prev == null) return;
 *              cursor = cursor.prev;
 *              undo_stack.push(new Edit("RIGHT", null));
 *         }
 *
 *         public void moveCursorRight() {
 *              if(cursor == end) return;
 *              cursor = cursor.next;
 *              undo_stack.push(new Edit("LEFT", null));
 *         }
 *
 *         public void insertCharacter(char ch) {
 *              CharNode n = new CharNode(ch);
 *              insert(n);
 *              undo_stack.push(new Edit("DEL", null));
 *         }
 *
 *         public void backspace() {
 *              if(cursor.prev == null) return;
 *              undo_stack.push(new Edit("INS", delete(cursor.prev)));
 *          }
 *
 *          public void undo() {
 *               if(undo_stack.isEmpty()) return;
 *               Edit edit = undo_stack.pop();
 *               switch(edit.edition) {
 *                    case "LEFT":
 *                         cursor = cursor.prev; break;
 *                     case "RIGHT":
 *                          cursor = cursor.next; break;
 *                     case "DEL":
 *                          delete(cursor.prev); break;
 *                     case "INS":
 *                          insert(edit.data); break;
 *                      default:
 *                          return;
 *                }
 *          }
 *
 *          public String toString() {
 *               StringBuilder text = new StringBuilder();
 *               CharNode n = end.prev;
 *               if(cursor == end) text.append('|');
 *
 *               while(n != null) {
 *                    text.insert(0, n.ch);
 *                    if(cursor == n) text.insert(0, '|');
 *                    n = n.prev;
 *               }
 *               return text.toString();
 *          }
 *
 *          private void insert(CharNode node) {
 *               CharNode prev = cursor.prev;
 *               node.next = cursor;
 *               cursor.prev = node;
 *               if(prev != null) {
 *                    prev.next = node;
 *                    node.prev = prev;
 *               }
 *          }
 *
 *          private CharNode delete(CharNode del) {
 *                if(del.prev != null) {
 *                     del.prev.next = cursor;
 *                }
 *
 *                cursor.prev = del.prev;
 *                return del;
 *          }
 *     }
 */