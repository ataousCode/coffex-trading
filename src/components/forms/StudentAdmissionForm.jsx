import React, { useState } from 'react';
import Button from '../common/Button';
import Card from '../common/Card';
import DocumentUpload from './DocumentUpload';
import useEmailJS from '../../hooks/useEmailJS';
import {
  Send, User, Mail, Phone, MapPin, Calendar,
  GraduationCap, FileText, CheckCircle, AlertCircle
} from 'lucide-react';

const StudentAdmissionForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    
    // Address Information
    currentAddress: '',
    city: '',
    country: '',
    postalCode: '',
    
    // Academic Information
    desiredProgram: '',
    desiredUniversity: '',
    previousEducation: '',
    gpa: '',
    englishProficiency: '',
    
    // Additional Information
    workExperience: '',
    personalStatement: '',
    specialRequirements: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [documents, setDocuments] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  
  const { sendEmail, loading, error: emailError, success } = useEmailJS();

  // Required documents list
  const requiredDocuments = [
    'Passport',
    'Photo',
    'Diploma',
    'Transcript',
    'Letter of Recommendation 1',
    'Letter of Recommendation 2',
    'Medical Report',
    'Non-Criminal Report',
    'Bank Statement',
    'English Proficiency Certificate',
    'Personal Statement',
    'CV/Resume'
  ];

  const programOptions = [
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD Program',
    'Language Course',
    'Foundation Program',
    'Exchange Program'
  ];

  const englishProficiencyOptions = [
    'IELTS',
    'TOEFL',
    'Cambridge English',
    'PTE Academic',
    'Duolingo English Test',
    'Native Speaker',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleDocumentsChange = (files) => {
    setDocuments(files);
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    const requiredFields = [
      'firstName', 'lastName', 'email', 'phone', 'dateOfBirth',
      'nationality', 'passportNumber', 'currentAddress', 'city',
      'country', 'desiredProgram', 'desiredUniversity'
    ];

    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())} is required`;
      }
    });

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Document validation
    if (documents.length === 0) {
      newErrors.documents = 'Please upload at least one document';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Prepare email template parameters
      const templateParams = {
        student_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        nationality: formData.nationality,
        passport_number: formData.passportNumber,
        desired_program: formData.desiredProgram,
        desired_university: formData.desiredUniversity,
        current_address: `${formData.currentAddress}, ${formData.city}, ${formData.country}`,
        date_of_birth: formData.dateOfBirth,
        previous_education: formData.previousEducation,
        gpa: formData.gpa,
        english_proficiency: formData.englishProficiency,
        work_experience: formData.workExperience,
        personal_statement: formData.personalStatement,
        special_requirements: formData.specialRequirements,
        emergency_contact: formData.emergencyContact,
        emergency_phone: formData.emergencyPhone,
        document_count: documents.length,
        document_list: documents.map(doc => doc.name).join(', '),
        submission_date: new Date().toLocaleDateString(),
        application_id: `SA-${Date.now().toString().slice(-8)}`
      };

      // Send email with documents
      const documentFiles = documents.map(doc => doc.file);
      await sendEmail(templateParams, documentFiles);
      
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  if (submitted && success) {
    return (
      <Card className="max-w-2xl mx-auto">
        <Card.Body className="text-center py-12">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Application Submitted Successfully!
          </h3>
          <p className="text-gray-600 mb-6">
            Thank you for your application. We have received all your documents and information.
            Our admissions team will review your application and contact you within 5-7 business days.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-900 mb-2">Application Details:</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p>• Application ID: SA-{Date.now().toString().slice(-8)}</p>
              <p>• Program: {formData.desiredProgram}</p>
              <p>• University: {formData.desiredUniversity}</p>
              <p>• Documents Uploaded: {documents.length}</p>
              <p>• Submission Date: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">Next Steps:</h4>
            <ul className="text-sm text-yellow-700 space-y-1 text-left">
              <li>• Check your email for confirmation</li>
              <li>• Our team will verify your documents</li>
              <li>• You may be contacted for additional information</li>
              <li>• Interview scheduling (if required)</li>
              <li>• Final admission decision notification</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <User className="w-5 h-5 mr-2 text-blue-600" />
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nationality *
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.nationality ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your nationality"
                />
                {errors.nationality && <p className="text-red-500 text-sm mt-1">{errors.nationality}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Passport Number *
                </label>
                <input
                  type="text"
                  name="passportNumber"
                  value={formData.passportNumber}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.passportNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your passport number"
                />
                {errors.passportNumber && <p className="text-red-500 text-sm mt-1">{errors.passportNumber}</p>}
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              Address Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Address *
                </label>
                <input
                  type="text"
                  name="currentAddress"
                  value={formData.currentAddress}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.currentAddress ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your current address"
                />
                {errors.currentAddress && <p className="text-red-500 text-sm mt-1">{errors.currentAddress}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your city"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your country"
                />
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter postal code"
                />
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
              Academic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired Program *
                </label>
                <select
                  name="desiredProgram"
                  value={formData.desiredProgram}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.desiredProgram ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select program</option>
                  {programOptions.map((program) => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
                {errors.desiredProgram && <p className="text-red-500 text-sm mt-1">{errors.desiredProgram}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desired University *
                </label>
                <input
                  type="text"
                  name="desiredUniversity"
                  value={formData.desiredUniversity}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.desiredUniversity ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter desired university"
                />
                {errors.desiredUniversity && <p className="text-red-500 text-sm mt-1">{errors.desiredUniversity}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Education
                </label>
                <input
                  type="text"
                  name="previousEducation"
                  value={formData.previousEducation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your previous education"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GPA/Grade
                </label>
                <input
                  type="text"
                  name="gpa"
                  value={formData.gpa}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your GPA or grade"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  English Proficiency
                </label>
                <select
                  name="englishProficiency"
                  value={formData.englishProficiency}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select proficiency test</option>
                  {englishProficiencyOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Document Upload */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Required Documents
            </h3>
            <DocumentUpload
              onFilesChange={handleDocumentsChange}
              requiredDocuments={requiredDocuments}
              maxFiles={15}
            />
            {errors.documents && <p className="text-red-500 text-sm mt-2">{errors.documents}</p>}
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Information
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Work Experience
                </label>
                <textarea
                  name="workExperience"
                  value={formData.workExperience}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe your work experience..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Personal Statement
                </label>
                <textarea
                  name="personalStatement"
                  value={formData.personalStatement}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your personal statement..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requirements
                </label>
                <textarea
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any special requirements or accommodations..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Name
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter emergency contact name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emergency Contact Phone
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter emergency contact phone"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Error Messages */}
          {emailError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                <p className="text-red-700">Error: {emailError}</p>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-200">
            <Button
              type="submit"
              className="w-full"
              icon={<Send />}
              loading={loading}
              disabled={loading}
            >
              {loading ? 'Submitting Application...' : 'Submit Application'}
            </Button>
            <p className="text-sm text-gray-500 text-center mt-3">
              Please ensure all information is accurate before submitting
            </p>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default StudentAdmissionForm;