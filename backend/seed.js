const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('../backend/model/book.model'); 
dotenv.config();
const URI = process.env.MONGODBURI;
console.log('MongoDB URI:', URI); // Log the URI to check if it's loaded correctly

mongoose.connect(URI)
  .then(() => {
    console.log('MongoDB connected');

    // Array of book data with image URLs and English titles
    const books = [
      {
          title: 'पाऊसपिसारा',
          title_en: 'Pausapisara', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'बालसाहित्य, कवितासंग्रह',
          publication: 'दिलीपराज प्रकाशन प्रा. लि.',
          pages: 48,
          binding: 'Paperback',
          price: 105,
          stock_status: 'Available Immediately',
          image: 'https://www.bookganga.com/eBooks/Content/images/books/5190b754c3234351aa6205036621354c.jpg'
      },
      {
          title: 'रक्ताळलेल्या तुरी',
          title_en: 'Raktalel Turi', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'कादंबरी',
          publication: 'लोकवाङमय गृह',
          pages: 124,
          binding: 'Paperback',
          price: 200,
          stock_status: 'Available Immediately',
          image: 'https://www.bookganga.com/eBooks/Content/images/books/3b09865463f347f6bc3e9998e5cb13c3.jpg'
      },
      {
          title: 'कडीबंदी',
          title_en: 'Kadibandi', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'ललित',
          publication: 'सप्तर्षी प्रकाशन',
          pages: 170,
          binding: 'Paperback',
          price: 157,
          stock_status: 'Available Immediately',
          image: 'https://m.media-amazon.com/images/I/41lgOztvj1L._SY445_SX342_.jpg'
      },
      {
          title: 'शेतकऱ्याचा असूड : एक आकलन',
          title_en: 'Shetkaryacha Asud: Ek Aakalan', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'सामाजिक',
          publication: 'स्वरूप प्रकाशन',
          pages: 86,
          binding: 'Paperback',
          price: 75,
          stock_status: 'Not in Stock',
          image: 'https://www.bookganga.com/eBooks/Content/images/books/593abb9ba44440c09028f7830b94d23a.jpg'
      },
      {
          title: 'गावाच्या तावडीतून सुटका',
          title_en: 'Gavachya Tawdheetun Sutka', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'कादंबारी',
          publication: 'विजय प्रकाशन (नागपूर)',
          pages: 180,
          binding: 'Paperback',
          price: 187,
          stock_status: 'Not in Stock',
          image: 'https://www.bookganga.com/eBooks/Content/images/books/694e54606d914392bcc9343365b3908e.jpg'
      },
      {
          title: 'कूड',
          title_en: 'Kood', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'कथासंग्रह',
          publication: 'स्वरूप प्रकाशन',
          pages: 144,
          binding: 'Paperback',
          price: 82,
          stock_status: 'Available Immediately',
          image: 'https://www.bookganga.com/eBooks/Content/images/books/f8fe71775c644960b40e0fa9fe6dd63c.jpg'
      },
      {
          title: 'गावाकडल्या कविता',
          title_en: 'Gavakadlya Kavita', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'कवितासंग्रह',
          publication: 'साक्षात प्रकाशन',
          pages: 58,
          binding: 'Paperback',
          price: 40,
          stock_status: 'Available Immediately',
          image: 'https://www.bookganga.com/eBooks/Content/images/books/0b434e6f795b473686c4a406c646de3a.jpg'
      },
      {
          title: 'आसूड',
          title_en: 'Asud', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'कथासंग्रह',
          publication: 'मेहता पब्लिशिंग हाऊस',
          pages: 113,
          price: 80,
          stock_status: 'Available Immediately',
          image: 'https://www.bookganga.com/eBooks/Content/images/books/939a3eb1e9614038bc4773202623b7c6.jpg'
      },
      {
          title: 'कुंधा',
          title_en: 'Kundha', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'कथा',
          publication: 'पॉप्युलर प्रकाशन',
          pages: 221,
          binding: 'Paperback',
          price: 160,
          stock_status: 'Available Immediately',
          image: 'https://www.bookganga.com/eBooks/Content/images/books/0c1901281ff34028b14d6d253a59bc2b.jpg'
      },
      {
          title: 'तावडी बोली',
          title_en: 'Tawadi Boli', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'भाषाविषयक',
          publication: 'अथर्व पब्लिकेशन्स (जळगाव)',
          pages: 116,
          binding: 'Paperback',
          price: 131,
          stock_status: 'Not in Stock',
          image: 'https://m.media-amazon.com/images/I/41y8lHIcQoS._SY445_SX342_.jpg'
      },
      {
          title: 'पाडा',
          title_en: 'Pada', // English title
          language: 'मराठी',
          authors: 'अशोक कौतिक कोळी',
          category: 'कथा, कादंबरी',
          publication: 'शब्दालय प्रकाशन',
          pages: 104,
          binding: 'Paperback',
          price: 97,
          stock_status: 'Available Immediately',
          image: 'https://www.bookganga.com/eBooks/Content/images/books/0f248c0f84d1403595cf40b9a63ebd1c.jpg'
      }
    ];

    // Insert multiple books into the collection
    Book.insertMany(books)
      .then((docs) => {
        console.log('Books inserted:', docs);
        mongoose.connection.close(); // Close the connection after insertion
      })
      .catch((error) => {
        console.error('Error inserting books:', error);
        mongoose.connection.close(); // Close the connection if an error occurs
      });

  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
