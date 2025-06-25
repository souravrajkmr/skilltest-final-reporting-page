import React, { useState } from 'react';
import {
  Trophy,
  Target,
  Clock,
  CheckCircle,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Share2,
  Download,
  Star,
  Users,
  Award,
  TrendingUp,
  Eye,
  Linkedin,
  Twitter,
  Facebook
} from 'lucide-react';

interface TestResult {
  userName: string;
  userAvatar?: string;
  level: string;
  skill: string;
  correctAnswers: number;
  wrongAnswers: number;
  skippedQuestions: number;
  timeTaken: string;
  score: number;
  passed: boolean;
  totalQuestions: number;
}

const mockResult: TestResult = {
  userName: "Sourav",
  level: "Beginner Level",
  skill: "Angular",
  correctAnswers: 2,
  wrongAnswers: 10,
  skippedQuestions: 18,
  timeTaken: "53 seconds",
  score: 6.67,
  passed: false,
  totalQuestions: 30
};

const SkillTestResult: React.FC = () => {
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const result = mockResult;

  const shareOnLinkedIn = () => {
    const text = `I just completed the ${result.skill} Skill Challenge on @ScholarHat! Time to level up my dev skills. 🚀 #${result.skill} #WebDev #SkillChallenge`;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&summary=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    const text = `I just completed the ${result.skill} Skill Challenge on @ScholarHat! Time to level up my dev skills. 🚀 #${result.skill} #WebDev #SkillChallenge`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-orange-400">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ScholarHat</h1>
              <p className="text-sm text-blue-600 font-medium">Skill Assessment Platform</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Personalized Summary Block */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-t-4 border-orange-400">
          <div className="text-center mb-8">
            <div className="w-28 h-28 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-4xl font-bold text-white">
                {result.userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              🎉 Well done, {result.userName}!
            </h1>
            <p className="text-xl text-gray-600">
              You've completed the <span className="font-bold text-blue-600">{result.level} {result.skill} Skill Challenge</span>
            </p>
          </div>

          {/* Performance Summary Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <CheckCircle className="w-10 h-10 text-green-600" />
                <span className="text-3xl font-bold text-green-700">{result.correctAnswers}</span>
              </div>
              <p className="text-green-700 font-semibold text-lg">Correct Answers</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <XCircle className="w-10 h-10 text-red-600" />
                <span className="text-3xl font-bold text-red-700">{result.wrongAnswers}</span>
              </div>
              <p className="text-red-700 font-semibold text-lg">Wrong Answers</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <HelpCircle className="w-10 h-10 text-orange-600" />
                <span className="text-3xl font-bold text-orange-700">{result.skippedQuestions}</span>
              </div>
              <p className="text-orange-700 font-semibold text-lg">Skipped Questions</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border-l-4 border-blue-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <Clock className="w-10 h-10 text-blue-600" />
                <span className="text-xl font-bold text-blue-700">{result.timeTaken}</span>
              </div>
              <p className="text-blue-700 font-semibold text-lg">Time Taken</p>
            </div>
          </div>

          {/* Score and Status */}
          <div className="text-center bg-gradient-to-r from-gray-50 to-slate-50 p-10 rounded-3xl border-2 border-gray-100 shadow-inner">
            <div className="mb-6">
              <div className="text-6xl font-bold text-gray-900 mb-4">
                {result.score.toFixed(1)}%
              </div>
              <div className={`inline-flex items-center px-6 py-3 rounded-full text-xl font-bold shadow-lg ${
                result.passed 
                  ? 'bg-green-500 text-white border-2 border-green-600' 
                  : 'bg-red-500 text-white border-2 border-red-600'
              }`}>
                {result.passed ? '✅ Passed' : '❌ Failed'}
              </div>
            </div>
            
            <button
              onClick={() => setShowDetailedAnalysis(!showDetailedAnalysis)}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Eye className="w-6 h-6 mr-3" />
              View Detailed Analysis
            </button>
          </div>
        </div>

        {/* Detailed Analysis */}
        {showDetailedAnalysis && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-t-4 border-blue-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Target className="w-8 h-8 mr-4 text-blue-600" />
              Detailed Performance Analysis
            </h2>
            
            <div className="space-y-6">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-bold text-gray-900 text-lg">Question {i + 1}</span>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                      i < 2 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}>
                      {i < 2 ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 text-base">
                    {i < 2 
                      ? 'Great job! You demonstrated solid understanding of this concept.'
                      : 'Consider reviewing the documentation on this topic. We recommend checking out our Angular Fundamentals course.'
                    }
                  </p>
                  <button className="text-blue-600 hover:text-blue-800 font-bold hover:underline">
                    View Explanation →
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certification Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl shadow-2xl p-10 mb-8 text-white">
          <div className="text-center">
            <Award className="w-20 h-20 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-3xl font-bold mb-6">🎉 Participation Badge Earned!</h2>
            <p className="text-orange-100 mb-8 text-xl">
              You attempted the {result.skill} Skill Challenge – Try again to level up your badge!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                <Download className="w-6 h-6 mr-3" />
                Download Certificate
              </button>
              <button className="px-8 py-4 bg-orange-400 text-white font-bold rounded-xl hover:bg-orange-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg">
                <Share2 className="w-6 h-6 mr-3" />
                Share Badge
              </button>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Retake & Improve */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-green-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="w-7 h-7 mr-4 text-green-600" />
              Retake & Improve
            </h2>
            
            <div className="space-y-6">
              <button className="w-full flex items-center justify-center px-8 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <RotateCcw className="w-6 h-6 mr-3" />
                🔄 Retake Test
              </button>
              
              <button className="w-full flex items-center justify-center px-8 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <BookOpen className="w-6 h-6 mr-3" />
                📘 Learn from Mistakes
              </button>
              
              <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium">
                  <strong>Recommended:</strong> Check out our Angular Fundamentals course and practice labs to strengthen your weak areas.
                </p>
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Share2 className="w-7 h-7 mr-4 text-blue-600" />
              🚀 Share Your Achievement
            </h2>
            
            <div className="space-y-6">
              <button
                onClick={shareOnLinkedIn}
                className="w-full flex items-center justify-center px-8 py-5 bg-[#0077B5] text-white font-bold rounded-xl hover:bg-[#006395] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Linkedin className="w-6 h-6 mr-3" />
                Share on LinkedIn
              </button>
              
              <button
                onClick={shareOnTwitter}
                className="w-full flex items-center justify-center px-8 py-5 bg-[#1DA1F2] text-white font-bold rounded-xl hover:bg-[#1a8cd8] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Twitter className="w-6 h-6 mr-3" />
                Share on Twitter
              </button>
              
              <button className="w-full flex items-center justify-center px-8 py-5 bg-[#4267B2] text-white font-bold rounded-xl hover:bg-[#365899] transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Facebook className="w-6 h-6 mr-3" />
                Share on Facebook
              </button>
              
              <div className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-200">
                <p className="text-gray-600 italic font-medium">
                  "I just completed the {result.skill} Skill Challenge on @ScholarHat! Time to level up my dev skills. 🚀 #Angular #WebDev #SkillChallenge"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* User Feedback */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-orange-400">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Help Us Improve</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">⭐ Rate This Test</h3>
              <div className="flex space-x-3 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`w-12 h-12 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
                      star <= rating
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-400 hover:bg-gray-300'
                    }`}
                  >
                    <Star className="w-7 h-7 mx-auto" fill={star <= rating ? 'currentColor' : 'none'} />
                  </button>
                ))}
              </div>
              <p className="text-gray-600 font-medium">Did you find this test useful?</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">🗣 Your Feedback</h3>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none font-medium"
                rows={4}
                placeholder="Tell us what can be improved..."
              />
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t-2 border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <button className="flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Users className="w-6 h-6 mr-3" />
                📤 Invite a Friend
              </button>
              
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTestResult;